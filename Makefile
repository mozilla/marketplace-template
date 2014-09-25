gulp:
	@node_modules/.bin/gulp

init:
	@npm install
	@node_modules/.bin/gulp update

update:
	@node_modules/.bin/gulp update
