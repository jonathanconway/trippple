#!make
include .env

start:
	SKIP_PREFLIGHT_CHECK=true yarn start

test:
	yarn test

run-storybook:
	yarn run storybook --host $(HOST) --port $(STORYBOOK_PORT)

run-cypress:
	yarn run cypress open --env STORYBOOK_HOST=$(HOST),STORYBOOK_PORT=$(STORYBOOK_PORT)
