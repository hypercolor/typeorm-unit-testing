module.exports = {
    transform: { "^.+\\.ts?$": ["ts-jest"] },
    testEnvironment: "node",
    testRegex: "/.*\\.(test|spec)?\\.ts$",
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],

    // A list of paths to modules that run some code to configure or set up the testing framework before each test
    setupFilesAfterEnv: ["./jest.setup.ts"],
};
