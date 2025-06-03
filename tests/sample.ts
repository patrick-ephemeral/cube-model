import { hello } from '../src/main';

describe("Sample Things", () => {

    test("Hello World works as expected", () => {

        var result = hello("World");

        expect(result).toBe("Hello, World!");
    });
});
