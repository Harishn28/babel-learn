const presets = [
    [
      "@babel/env",
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
