"use strict";module.export({foo:()=>foo});module.export({id:()=>id,name:()=>name},true);const path = require("path");

const id = module.id,
  name = path.basename(__filename);

function foo() {
  return "foo";
}
