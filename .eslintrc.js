module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: 'airbnb-base',
    overrides: [
        {
            env: {
                node: true,
            },
            files: [
                '.eslintrc.{js,cjs}',
            ],
            parserOptions: {
                sourceType: 'script',
            },
        },
    ],
    parserOptions: {
        ecmaVersion: 'latest',
    },
    rules: {
        'indent': ['error', 4, {ignoredNodes: ['TemplateLiteral *']}],
        'no-multiple-empty-lines': ['error', {max: 2, maxEOF: 0}],
        'no-param-reassign': ['error', {props: false}],
        'no-underscore-dangle': 'off',
        'no-use-before-define': ['error', {functions: false}],
        'object-curly-spacing': ['error', 'never'],
        'quote-props': ['error', 'consistent-as-needed'],
        'import/extensions': ['error', 'always'],
        'import/no-default-export': 'error',
        'import/prefer-default-export': 'off',
    },
};
