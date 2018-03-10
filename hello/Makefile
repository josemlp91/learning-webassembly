CC=emcc
SOURCES=hello.c
EXPORTS_FILE=makefile_exports.txt
OUTPUT=hello.html


$(OUTPUT): $(SOURCES)
	$(CC) $(SOURCES) -s WASM=1 -o hello.html
