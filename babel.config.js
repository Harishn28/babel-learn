const presets = [
    [
      "@babel/env",
      {
        corejs: { version: 3 },
        useBuiltIns: 'usage',
        targets: {
          chrome: '79',
          node: '8',
        },
      },
    ],
  ];

  const plugins = [
    [
      "@babel/plugin-transform-runtime",
      {
        regenerator: true,
        corejs: false,
      }
    ]
  ]
  

  module.exports = { presets, plugins };
