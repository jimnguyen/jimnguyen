-- Run this once in the SAME Supabase project used by daily-allowance and
-- workout-tracker (Project → SQL Editor → New query → paste → Run).
-- RLS keeps this app's tables isolated from the other two.

create table if not exists korean_sessions (
  id uuid primary key default gen_random_uuid(),
  date date not null,
  subject text not null,
  detail text not null default '',
  completed boolean not null default false,
  created_at timestamptz not null default now()
);
create index if not exists korean_sessions_date_idx on korean_sessions (date);

create table if not exists korean_goal (
  id text primary key default 'default',
  start_date date not null,
  target_date date not null,
  target_level text not null,
  updated_at timestamptz not null default now()
);

alter table korean_sessions enable row level security;
alter table korean_goal enable row level security;

-- Public read: anyone can view the calendar and progress.
create policy "public read korean_sessions" on korean_sessions for select using (true);
create policy "public read korean_goal" on korean_goal for select using (true);

-- Writes require the same signed-in Supabase Auth user as the other apps.
create policy "authenticated write korean_sessions" on korean_sessions
  for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
create policy "authenticated write korean_goal" on korean_goal
  for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
