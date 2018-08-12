BINDIR=node_modules/.bin
MICROBUNDLE=$(BINDIR)/microbundle
ESLINT=$(BINDIR)/eslint

ARG=$(filter-out $@,$(MAKECMDGOALS))
PACKAGE=packages/$(ARG)
PACKAGE_VERSION=$(shell node -p -e 'require("./$(PACKAGE)/package.json").version')

help :
	@echo "Available commands for Alidator.js monorepo:"
	@echo ""
	@echo "  make dist\t\t\tbuild everything"
	@echo "  make dist <package>\t\tbuild dist for <package> only (e.g. 'make dist validator')"
	@echo "  make example\t\t\texecute examples"
	@echo "  make release <package>\texecute release <package>"
	@echo "  make test\t\t\ttest everything"
	@echo "  make test <package>\t\ttest just <package>  (e.g. 'make test validator')"
	@echo "  make test:watch <package>\ttest just <package>  (e.g. 'make test:watch validator')"
	@echo ""

dist :
	@if [ "$(ARG)" = "" ]; then \
		make format-all ; \
		while read d ; do \
			echo "Compiling $$d" ; \
			make test $$d || exit $? ;\
			make dist $$d || exit $? ;\
		done < .scripts/PACKAGES; \
	else \
		rm -rf $(PACKAGE)/dist/ ;\
		cd $(PACKAGE) || exit $? ;\
		../../$(MICROBUNDLE) build -i index.js --name $(PACKAGE) || exit $? ; \
		cd ../../ || exit $? ; \
		([ $$? -eq 0 ] && echo "✓ Builded dist" || exit 1) ;\
	fi

example :
	node -r esm examples.js

format-all :
	@echo "Formatting all source files using prettier"
	@while read d ; do \
		$(BINDIR)/prettier --write \
		"packages/$$d/*.js" ;\
	done < .scripts/PACKAGES

lint :
	@if [ "$(ARG)" = "" ]; then \
		make lint-all ;\
	else \
		cd $(PACKAGE) && ../../$(ESLINT) --fix *.js;\
		echo "✓ ESLint $(PACKAGE) passed" ;\
	fi

lint-all :
	.scripts/lint-all.sh

release :
	@if [ "$(ARG)" = "" ]; then \
		echo "Error: No package defined" ;\
	else \
		make test $(ARG) || exit $? ;\
		make dist $(ARG) || exit $? ;\
		([ $$? -eq 0 ] && echo "✓ Released $(ARG)-$(PACKAGE_VERSION)" || exit 1) ;\
	fi

test :
	@if [ "$(ARG)" = "" ]; then \
		make test-all ;\
	else \
		cd $(PACKAGE) || exit $? ;\
		npm run test || exit $? ;\
		cd ../../ || exit $? ;\
		([ $$? -eq 0 ] && echo "✓ Tested $(PACKAGE)" || exit 1) ;\
	fi

test-watch :
	@if [ "$(ARG)" = "" ]; then \
		echo "Error: No package defined" ;\
	else \
		cd $(PACKAGE) && npm run test:watch && ([ $$? -eq 0 ] && echo "✓ Tested $(PACKAGE)") || exit 1;\
	fi

test-all :
	.scripts/test-all.sh

# catch anything and do nothing
%:
	@:
