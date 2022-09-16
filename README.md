# fresh_sign: fresh project

My attempt at a web app using deno, fresh, and supabase.

## Usage

```sh
# Spin up local supabase 
# and run `deno task start`
make start

# Spin down local supabase
supabase stop
```

## MVP

List of basic requirements:

**V1 List** :

* [ ] Signup Page:
  * [x] Email/Password signup
  * [ ] Enrpyt Password
  * [ ] Social login (google (required), [facebook, twitter, etc (stretch)])
* [] Login Page
  * [x] Email + Password
  * [ ] Encrpyt Password
  * [ ] Social Logins
  * [ ] 2FA ? (stretch)
* [ ] Set/Get User Cookie
  * [ ] set user id cookie on login
    * [ ] can I set data non-sensitive data in the browser with cookies?
  * [ ] get user id when needed
  * [ ] secure stored/access cookies
  * [ ] Possible "Legal Cookie usage alert" popup thingy? (stretch)
* [x] Redirect to "user's dashboard"
* [x] 'Prod' db (planetscale, railway, supabase?)
  * [x] Supabase looks cool <strike>, waiting for more deno support for Auth</strike>

## Stack / Requirements

Cuz every web dev loves/hates stacks

* Deno
* Fresh (framework)
* Deno Deploy (website hosting)
* Supabase (Auth/DB/Edge Functions)
* Supabase CLI (local dev)

### Examples

[Coding Garden](https://youtu.be/gARlBrjEnRw?t=6713)
[Supabase youtube](https://www.youtube.com/c/Supabase)

## My Notes

Login/Signup

* [x] Dockerfile for local server
  * [x] Use makefile to spin up and down postgres container
  * [ ] Might need docker-compose for volume mounting and other docker stuff

* [x] Replace local postgres docker with supabase env

<strike>On Second thought, maybe this stack is not stable enough for production, but perfect for hacking and tweaking as
 these tools continue to be developed.</strike>

ESM imports for the WIN!!!!!! I think I can power this app with supabase-js library!!!!

**Supabase Support**:

* Using ESM import "https://esm.sh/@supabase/supabase-js@1.35.6" worked!!!!!

## Helpful Links

* [Fresh](https://fresh.deno.dev/)
* [Deno Deploy](https://deno.com/deploy)
* [Supabase](https://supabase.com/)
  * [supbase-js](https://supabase.com/docs/reference/javascript) JS client (might be able to use with deno)
  * [supabase cli](https://supabase.com/blog/supabase-cli) * Status: Active Development, V1 ready
  * [native deno supbase postgres support](https://github.com/supabase/postgres-deno): Status * POC
* Prisma:
  * [deno support](https://github.com/prisma/prisma/issues/2452) * Status * In Progress
  * [prisma studio](https://www.prisma.io/studio)
