module.exports = {
    "root": true,
    "parser": '@typescript-eslint/parser',
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "plugins": [
        '@typescript-eslint',
        'react-hooks'
    ],
    "extends": [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module",
    },
    "rules": {
        "no-console": "off",
        "comma-dangle": "off",
        "react/jsx-filename-extension": "off",
        "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
        "react-hooks/exhaustive-deps": "warn" // Checks effect dependencies
    }
};
