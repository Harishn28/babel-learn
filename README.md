# Polyfills can be included into babel in following ways.

## Using [@babel/polyfill](https://babeljs.io/docs/en/babel-polyfill)(deprecated)
 
 ```npm install --save @babel/polyfill```
 
 After adding it in dependency. Import it in beginning of your project.
 ```import "@babel/polyfill";```
This will include all polyfills and regenerator-runtime. This also includes polyfill which are not necessary for target environments.

## Using [core-js](https://github.com/zloirock/core-js) and [regenerator-runtime](https://github.com/facebook/regenerator/tree/master/packages/regenerator-runtime) seperately.
```
npm install --save core-js
npm i regenerator-runtime
```
Add following statement in the beginning of your project.
```
import "core-js/stable";
import "regenerator-runtime/runtime";
```

## Using [core-js](https://github.com/zloirock/core-js) and [regenerator-runtime](https://github.com/facebook/regenerator/tree/master/packages/regenerator-runtime) with [@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env)

Above two ways of including polyfills includes all polyfills(even the ones which are not necessary for target environment). preset-env provides a way to include polyfills which are needed by target environments.

preset-env accepts an option ```useBuiltIns```. Depending upon the value provided to ```useBuiltIns``` Polyfills will be included differently.

useBuiltIns="entry"

```const presets = [
    [
      "@babel/env",
      {
        corejs: { version: 3 },
        useBuiltIns: 'entry',
        targets: {
          chrome: '70',
          node: "8",
          ie:'10',
        },
      },
    ],
  ];```
  
  ![Compiled with usageBuilInsEntry](https://github.com/Harishn28/babel-learn/blob/master/images/usageEntry.png)
