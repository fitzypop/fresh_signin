# fresh_sign: fresh project

My attempt at a web app.

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

### Examples

[Coding Garden](https://youtu.be/gARlBrjEnRw?t=6713)

### Usage

Start the project:

```sh

make run
```

This spin up a postgres docker container, and will watch the project directory and restart as necessary.

## My Notes

Login/Signup

- [x] Dockerfile for local server
  - [x] Use makefile to spin up and down postgres container
  - [ ] Might need docker-compose for volume mounting and other docker stuff

- [ ] Replace local postgres docker with supabase env

WIP: [Brand Colors](https://coolors.co/112233-628395-ecf0f1-436436-ad5d4e)

## Stack

On Second thought, maybe this stack is not stable enough for production, but perfect for hacking and tweaking as
 these tools continue to be developed.

- [Fresh](https://fresh.deno.dev/) - Status: Ready
- Deno - Status: Ready (mostly)
- [Deno Deploy](https://deno.com/deploy) - Staus: Ready but possible unstable
- [Supabase](https://supabase.com/) (db and user auth)
  - [supbase-js](https://supabase.com/docs/reference/javascript) JS client (might be able to use with deno)
    - Using ESM import "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm" worked!!!!!
  - [supabase cli](https://supabase.com/blog/supabase-cli) - Status: Active Development, V1 ready
  - [native deno supbase postgres support](https://github.com/supabase/postgres-deno): Status - POC
  - native deno supabase auth support - Status: unknown
- Prisma:
  - [deno support](https://github.com/prisma/prisma/issues/2452) - Status - In Progress
