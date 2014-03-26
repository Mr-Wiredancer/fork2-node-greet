compile:
	coffee --compile --output lib src

test:
	make compile
	npm test

package:
	make test
	npm pack

.PHONY: compile test package
