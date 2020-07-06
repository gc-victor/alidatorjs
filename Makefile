ARG=$(filter-out $@,$(MAKECMDGOALS))
PACKAGE=packages/$(ARG)
PACKAGE_VERSION=$(shell node -p -e 'require("./$(PACKAGE)/package.json").version')

help :
	@echo "Available commands for Alidator.js monorepo:"
	@echo ""
	@echo "  make dist <package>\t\tbuild dist for <package> only (e.g. 'make dist validator')"
	@echo "  make dist-all\t\t\tbuild everything"
	@echo "  make example\t\t\texecute examples"
	@echo "  make release-minor <package>\trelease a new minor version of <package>"
	@echo "  make release-major <package>\trelease a new major version of <package>"
	@echo "  make test\t\t\ttest everything"
	@echo "  make test <package>\t\ttest just <package>  (e.g. 'make test validator')"
	@echo "  make test:watch <package>\ttest just <package>  (e.g. 'make test:watch validator')"
	@echo ""

build :
	@if [ "$(ARG)" = "" ]; then \
		echo "Error: please call 'make dist' with an argument, like 'make dist validator'" ;\
	else \
		rm -rf $(PACKAGE)/dist/ ;\
		cd $(PACKAGE) || exit $? ;\
		npx microbundle build -i index.js --name $(PACKAGE) || exit $? ; \
		cd ../../ || exit $? ; \
		([ $$? -eq 0 ] && echo "✓ Builded $(ARG) distribution files" || exit 1) ;\
	fi

build-all :
	@if [ "$(ARG)" = "" ]; then \
		make format-all || exit $? ;\
		make test-all || exit $? ;\
		while read d ; do \
			echo "Compiling $$d" ; \
			make build $$d || exit $? ;\
		done < .scripts/PACKAGES ; \
		([ $$? -eq 0 ] && echo "✓ Builded $$d distribution files" || exit 1) ;\
	fi

example :
	node -r esm examples.js

format :
	@if [ "$(ARG)" = "" ]; then \
		echo "Error: please call 'make format' with an argument, like 'make format validator'" ;\
	else \
		npx prettier --write "packages/$(ARG)/*.js" ;\
	fi

format-all :
	@echo "Formatting all source files using prettier"
	@while read d ; do \
		make format $$d ;\
	done < .scripts/PACKAGES

release :
	@if [ "$(ARG)" = "" ]; then \
		echo "Error: No package defined" ;\
	else \
		git add -A || exit $? ;\
		git commit -m 'release($(ARG)): $(PACKAGE_VERSION)' || exit $? ;\
		git push origin master || exit $? ;\
		git tag $(ARG)-$(PACKAGE_VERSION) || exit $? ;\
		git push --tags || exit $? ;\
		cd $(PACKAGE) || exit $? ;\
		npm publish || exit $? ;\
		cd ../../ || exit $? ;\
		([ $$? -eq 0 ] && echo "✓ Released $(ARG) $(PACKAGE_VERSION)" || exit 1) ;\
	fi

release-minor :
	@if [ "$(ARG)" = "" ]; then \
		echo "Error: please call 'make release-minor' with an argument, like 'make release-minor validator'" ;\
	else \
		make test $(ARG) || exit $? ;\
		make dist $(ARG) || exit $? ;\
		cd $(PACKAGE) || exit $? ;\
		npm version minor || exit $? ;\
		cd ../../ || exit $? ;\
		make release  $(ARG) || exit $? ;\
		([ $$? -eq 0 ] && echo "✓ Released new minor $(ARG)-$(PACKAGE_VERSION)" || exit 1) ;\
fi

release-major :
	@if [ "$(ARG)" = "" ]; then \
		echo "Error: please call 'make release-major' with an argument, like 'make release-major validator'" ;\
	else \
		make test $(ARG) || exit $? ;\
		make dist $(ARG) || exit $? ;\
		cd $(PACKAGE) || exit $? ;\
		npm version major || exit $? ;\
		cd ../../ || exit $? ;\
		make release  $(ARG) || exit $? ;\
		([ $$? -eq 0 ] && echo "✓ Released new major $(ARG)-$(PACKAGE_VERSION)" || exit 1) ;\
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

test-all :
	.scripts/test-all.sh

test-watch :
	npx chokidar-cli "**/*.js" -c "make test" || exit $? ;\

# catch anything and do nothing
%:
	@:
