-- Run this in Supabase: Dashboard → SQL Editor → New query → paste → Run.
-- Safe to run more than once, and safe if you ran the earlier version of this file.

create table if not exists public.withdrawals (
  id         bigint generated always as identity primary key,
  created_at timestamptz not null default now(),
  reference  text not null unique,
  amount     numeric(14, 2) not null,
  fee        numeric(14, 2) not null,
  net_amount numeric(14, 2) not null,
  method     text not null,
  status     text not null default 'pending'
);

alter table public.withdrawals
  add column if not exists currency       text not null default 'INR',
  add column if not exists contact_email  text,
  add column if not exists country        text,
  add column if not exists holder_name    text,
  add column if not exists bank_name      text,
  add column if not exists iban           text,
  add column if not exists account_number text,
  add column if not exists bank_code_type text,
  add column if not exists bank_code      text,
  add column if not exists swift_bic      text,
  add column if not exists paypal_email   text,
  add column if not exists upi_id         text,
  add column if not exists note           text;

-- Amounts are now in many currencies, so replace the old INR-only minimum.
alter table public.withdrawals drop constraint if exists withdrawals_amount_check;
alter table public.withdrawals add constraint withdrawals_amount_check check (amount > 0);

alter table public.withdrawals drop constraint if exists withdrawals_method_check;
alter table public.withdrawals add constraint withdrawals_method_check check (method in ('bank', 'paypal', 'upi'));

alter table public.withdrawals drop constraint if exists withdrawals_currency_check;
alter table public.withdrawals add constraint withdrawals_currency_check check (currency ~ '^[A-Z]{3}$');

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
