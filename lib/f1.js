"use strict";

require("core-js/modules/es.promise");

require("core-js/modules/es.promise.finally");

const p = new Promise(resolve => {
  resolve(2);
});
p.finally(() => {
  console.log('Promise finally');
});