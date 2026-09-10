-- Run this once in a dedicated Supabase project's SQL editor
-- (Project → SQL Editor → New query → paste → Run).

create table if not exists workouts (
  id uuid primary key default gen_random_uuid(),
  date date not null,
  type text not null check (type in ('strength', 'cardio', 'other')),
  title text not null,
  detail text not null default '',
  completed boolean not null default true,
  -- [{name: "Flat Bench", sets: [{weight: "135", reps: 8}, ...]}, ...]
  exercises jsonb not null default '[]'::jsonb,
  created_at timestamptz not null default now()
);
create index if not exists workouts_date_idx on workouts (date);

create table if not exists weight_entries (
  id uuid primary key default gen_random_uuid(),
  date date not null unique,
  weight numeric not null,
  created_at timestamptz not null default now()
);
create index if not exists weight_entries_date_idx on weight_entries (date);

create table if not exists goal (
  id text primary key default 'default',
  start_weight numeric not null,
  target_weight numeric not null,
  target_date date not null,
  updated_at timestamptz not null default now()
);

alter table workouts enable row level security;
alter table weight_entries enable row level security;
alter table goal enable row level security;

-- Public read: anyone can view the calendar and progress (that's the point).
create policy "public read workouts" on workouts for select using (true);
create policy "public read weight_entries" on weight_entries for select using (true);
create policy "public read goal" on goal for select using (true);

-- Writes require a real signed-in Supabase Auth user — the anon key alone
-- (which ships in the public page's JS) cannot insert/update/delete.
-- You'll create exactly one user for yourself; anyone else would need
-- valid credentials to write anything.
create policy "authenticated write workouts" on workouts
  for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
create policy "authenticated write weight_entries" on weight_entries
  for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
create policy "authenticated write goal" on goal
  for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
