module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true,
        "jest": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
        "indent": ["warn", 4],
        "no-empty": "warn",
        "no-unused-vars": "warn",
        "linebreak-style": ["warn", "unix"],
        // "semi": ["error", "never"],
        "quotes": ["warn", "single", { "avoidEscape": true, "allowTemplateLiterals": true }],
    },
    globals: {
        "__dirname": true,
        "process": true,
        "module": true,
        "page": true,
        "browser": true
    }
};
