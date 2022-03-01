module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:storybook/recommended",
        "plugin:jest/recommended"
    ],
    rules: {
        "prefer-const": ["error"],
        "no-console": ["error", {
            "allow": ["warn", "error", "info"]
        }],
        "no-alert": "error",
        "no-undef": "off",
        "@typescript-eslint/no-var-requires": "off",
    }
};
