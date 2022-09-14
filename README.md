# fresh_sign: fresh project

My attempt at a web app.

## MVP

List of basic requirements:

- [ ] Login Page
- [ ] Redirect to "user's home page"
- [ ] Store user information (securly) client side (cookie?)
- [ ] 'Prod' db (planetscale, railway, supabase?)

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

- [ ] Dockerfile for local server
  - [ ] Might need docker-compose
  - [ ] Fix error
- [ ] Make User model
  - [ ] Look into prisma
- [ ] Hash method for password
  - [ ] In code or in db?
- [ ] JWT / Auth Token generation
  - [ ] How does auth token hook into fresh api ?
  - [ ] tRpc for deno?

WIP: [Brand Colors](https://coolors.co/112233-628395-ecf0f1-436436-ad5d4e)

## Stack

- Fresh
- Deno
- Deno Deploy (host website)
- Supabase (db and user auth)
