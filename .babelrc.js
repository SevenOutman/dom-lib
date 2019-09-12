module.exports = api => {
  const { NODE_ENV } = process.env;
  const modules = NODE_ENV === 'esm' ? false : 'commonjs';

  if (api) {
    api.cache(() => NODE_ENV);
  }

  return {
    presets: [
      ['@babel/preset-env', { modules, loose: true }],
      '@babel/preset-react',
      '@babel/preset-flow'
    ],
    plugins: [
      '@babel/plugin-transform-proto-to-assign',
      '@babel/plugin-syntax-dynamic-import',
      '@babel/plugin-syntax-import-meta',
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-proposal-json-strings',
      '@babel/plugin-proposal-function-sent',
      '@babel/plugin-proposal-export-namespace-from',
      '@babel/plugin-proposal-numeric-separator',
      '@babel/plugin-proposal-throw-expressions',
      '@babel/plugin-proposal-export-default-from',
      '@babel/plugin-proposal-logical-assignment-operators',
      '@babel/plugin-proposal-optional-chaining',
      [
        '@babel/plugin-proposal-pipeline-operator',
        {
          proposal: 'minimal'
        }
      ],
      '@babel/plugin-proposal-nullish-coalescing-operator',
      '@babel/plugin-proposal-do-expressions'
    ]
  };
};
