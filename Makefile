gulp:
	@node_modules/.bin/gulp

init:
	@npm install
	@node_modules/.bin/gulp update
	@cp src/media/js/settings_local.js.dist src/media/js/settings_local.js

update:
	@node_modules/.bin/gulp update

build:
	@node_modules/.bin/gulp build

clean:
	@node_modules/.bin/gulp clean
