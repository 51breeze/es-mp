const path = require("path");
const Polyfill = require('es-javascript/core/Polyfill')
const Modules = new Map();
Polyfill.createEveryModule(Modules, path.join(__dirname,"../","polyfill") );
module.exports={
    path:path.join(__dirname,"../","polyfill"),
    Modules,
}