const presets = [
    [
      "@babel/env",
      {
        corejs: { version: 3 },
        useBuiltIns: 'usage',
        targets: {
          chrome: '50',
          ie:'10',
          node: '8',
        },
        exclude: [
          "transform-regenerator"
        ]
      },
    ],
  ];

  const plugins = [
    [
      "@babel/plugin-transform-runtime",
      {
        regenerator: true,
        corejs: '3',
      }
    ]
  ]
  

  module.exports = { presets, plugins };
