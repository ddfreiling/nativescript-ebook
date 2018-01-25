var EBookReader = require("nativescript-ebook").EBookReader;
var ebookReader = new EBookReader();

describe("greet function", function() {
    it("exists", function() {
        expect(ebookReader.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(ebookReader.greet()).toEqual("Hello, NS");
    });
});

describe("open function", function() {
    it("exists", function() {
        expect(ebookReader.open).toBeDefined();
    });
});