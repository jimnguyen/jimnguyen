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

-- Flashcards: fully private (no public-read policy), unlike the calendar and
-- goal tables above. There's no showcase value in a raw vocab list, so the
-- whole thing — browsing, quizzing, adding cards — requires sign-in.
-- Leitner-box level + due date are tracked separately per direction, since
-- recognizing a word (Hangul shown) and producing it (English shown) are
-- different skills that shouldn't share one progress number.
create table if not exists flashcards (
  id uuid primary key default gen_random_uuid(),
  hangul text not null,
  english text not null,
  example text not null default '',
  recognition_box int not null default 1,
  recognition_due date not null default current_date,
  production_box int not null default 1,
  production_due date not null default current_date,
  created_at timestamptz not null default now()
);
create index if not exists flashcards_recognition_due_idx on flashcards (recognition_due);
create index if not exists flashcards_production_due_idx on flashcards (production_due);

alter table flashcards enable row level security;
create policy "authenticated all flashcards" on flashcards
  for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
