build:
	docker-compose build

start:
	docker-compose up

restart:
	docker-compose restart epixweb

shell:
	docker-compose exec epixweb bash

build-js:
	npm run build
