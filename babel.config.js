const presets = [
    [
      "@babel/env",
      {
        corejs: { version: 3 },
        useBuiltIns: 'usage',
        targets: {
          chrome: '79',
          node: "8",
        },
      },
    ],
  ];


  
  module.exports = { presets };