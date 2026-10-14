-- Run this once in Supabase: Dashboard → SQL Editor → New query → paste → Run.

create table if not exists public.withdrawals (
  id             bigint generated always as identity primary key,
  created_at     timestamptz not null default now(),
  reference      text not null unique,
  amount         numeric(12, 2) not null check (amount >= 100),
  fee            numeric(12, 2) not null,
  net_amount     numeric(12, 2) not null,
  method         text not null check (method in ('bank', 'upi', 'paypal')),
  holder_name    text,
  bank_name      text,
  account_number text,
  ifsc           text,
  upi_id         text,
  paypal_email   text,
  note           text,
  status         text not null default 'pending'
);

-- Row Level Security: the public form may only ADD new pending requests.
-- It cannot read, change or delete anything. View rows in the Table Editor.
alter table public.withdrawals enable row level security;

drop policy if exists "Public can submit withdrawal requests" on public.withdrawals;
create policy "Public can submit withdrawal requests"
  on public.withdrawals
  for insert
  to anon
  with check (status = 'pending');

grant insert on public.withdrawals to anon;
