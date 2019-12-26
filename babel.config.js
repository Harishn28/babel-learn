const presets = [
    [
      "@babel/env",
      {
        corejs: { version: 3, proposals: true },
        useBuiltIns: 'usage',
        targets: {
          chrome: '70',
          node: "8",
          ie:'10',
        },
      },
    ],
  ];

  const plugins = [
    [
      "@babel/plugin-transform-runtime",
      {
        regenerator: false,
        corejs: false,
      }
    ]
  ]
  
  module.exports = { presets, plugins };
  // module.exports = { presets };