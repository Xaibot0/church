create table registrations (
  id bigint primary key generated always as identity,
  first_name text,
  last_name text,
  email text not null,
  phone text,
  created_at timestamp with time zone default now()
);

alter table registrations enable row level security;

create policy "Allow insert registrations"
on registrations for insert
with check (true);

create policy "Allow select registrations"
on registrations for select
using (true);
