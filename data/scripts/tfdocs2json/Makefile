build: build/tfdocs2json
.PHONY: build

build/tfdocs2json: $(shell find . -name '*.go')
	go build -o build/tfdocs2json .

test:
	go test -v ./...
.PHONY: test

fixtures: build
	mkdir -p outputs
	./build/tfdocs2json -md ./fixtures/docs/ami.html.markdown  > outputs/ami.json
	./build/tfdocs2json -md ./fixtures/docs/rds_cluster.html.markdown  > outputs/rds_cluster.json
	./build/tfdocs2json -md ./fixtures/docs/cloudwatch_event_bus.html.markdown  > outputs/cloudwatch_event_bus.json
.PHONY: fixtures

clean:
	rm -rf build
	rm -rf outputs
.PHONY: clean

install:
	go install
.PHONY: install
