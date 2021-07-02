--! Previous: sha1:040dbcf75cd5b674d5dd1d99e085b1545ecb1b92
--! Hash: sha1:eb38717008878c4d4506fee6bfe042c5e4c20f47

--! split: 1-current.sql

-- !!! TODO: WHY ????
GRANT USAGE ON SCHEMA app_public TO :DATABASE_AUTHENTICATOR;

drop table if exists app_public.users_roles;
drop table if exists app_public.user_roles;

create table app_public.user_roles (
  type text primary key,
  description text
);
comment on table app_public.user_roles is E'@enum';
insert into app_public.user_roles (type, description) values
  ('admin', 'admin'),
  ('user', 'user'),
  ('dev', 'dev');

create table app_public.users_roles (
    id uuid primary key default gen_random_uuid(),
    user_id uuid not null references app_public.users on delete cascade,
    role text not null references app_public.user_roles on delete cascade,
    created_at timestamptz not null default now(),
    unique (user_id, role)
);

create index on app_public.users_roles (user_id);
create index on app_public.users_roles (role);

alter table app_public.user_roles enable row level security;
alter table app_public.users_roles enable row level security;

create policy select_everyone on app_public.user_roles for select using (true);
create policy all_everyone on app_public.users_roles for all using (true);

grant select, insert, update, delete on app_public.user_roles to :DATABASE_AUTHENTICATOR;
-- grant select, insert, update, delete on app_public.user_roles to :DATABASE_VISITOR;
grant select, insert, update, delete on app_public.users_roles to :DATABASE_VISITOR;
