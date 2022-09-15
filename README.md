# fresh_sign: fresh project

My attempt at a web app.

## Usage

WIP

## MVP

List of basic requirements:

- Signup Page:
  - [ ] Email/Password signup
  - [ ] Social login (google (required), [facebook, twitter, etc (stretch)])
  - redirect to home/dash screen
- [ ] Login Page
  - [ ] Email + Password
  - [ ] Social Logins
  - [ ] 2FA ? (stretch)
- [ ] Set/Get User Cookie
  - [ ] set user id cookie on login
    - [ ] can I set data non-sensitive data in the browser with cookies?
  - [ ] get user id when needed
  - [ ] secure stored/access cookies
  - [ ] Possible "Legal Cookie usage alert" popup thingy? (stretch)
- [ ] Redirect to "user's home page"
- [ ] 'Prod' db (planetscale, railway, supabase?)
  - [ ] Supabase looks cool, waiting for more deno support for Auth

## Stack / Requirements

Cuz every web dev loves/hates stacks

- Deno
- Fresh (framework)
- Deno Deploy (website hosting)
- Supabase (Auth/DB/Edge Functions)
- Supabase CLI (local dev)

### Examples

[Coding Garden](https://youtu.be/gARlBrjEnRw?t=6713)
[Supabase youtube](https://www.youtube.com/c/Supabase)

## My Notes

Login/Signup

- [x] Dockerfile for local server
  - [x] Use makefile to spin up and down postgres container
  - [ ] Might need docker-compose for volume mounting and other docker stuff

- [ ] Replace local postgres docker with supabase env

<strike>On Second thought, maybe this stack is not stable enough for production, but perfect for hacking and tweaking as
 these tools continue to be developed.</strike>

ESM imports for the WIN!!!!!! I think I can power this app with supabase-js library!!!!

**Supabase Support**:

- Using ESM import "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm" worked!!!!!

## Helpful Links

- [Fresh](https://fresh.deno.dev/)
- [Deno Deploy](https://deno.com/deploy)
- [Supabase](https://supabase.com/)
  - [supbase-js](https://supabase.com/docs/reference/javascript) JS client (might be able to use with deno)
  - [supabase cli](https://supabase.com/blog/supabase-cli) - Status: Active Development, V1 ready
  - [native deno supbase postgres support](https://github.com/supabase/postgres-deno): Status - POC
- Prisma:
  - [deno support](https://github.com/prisma/prisma/issues/2452) - Status - In Progress
  - [prisma studio](https://www.prisma.io/studio)
