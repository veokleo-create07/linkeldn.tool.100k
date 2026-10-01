create table if not exists public.waitlist (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  first_name text,
  source text not null default 'homepage',
  status text not null default 'waiting',
  marketing_consent boolean not null default false,
  consented_at timestamptz,
  created_at timestamptz not null default now(),
  confirmation_sent_at timestamptz,
  constraint waitlist_email_length check (char_length(email) between 3 and 320),
  constraint waitlist_status check (status in ('waiting', 'invited', 'joined', 'unsubscribed'))
);

create index if not exists waitlist_created_at_idx on public.waitlist (created_at desc);

alter table public.waitlist enable row level security;
