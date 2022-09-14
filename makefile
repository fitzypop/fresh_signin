pg-down:
	docker stop fresh-pg

pg-up:
	docker run -d -p 5432:5432 postgres --name fresh-pg

up:pg-up
	deno task start
