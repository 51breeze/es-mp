const path = require("path");
const Core = require("./Core");
const Modules = new Map();
Core.Polyfill.createEveryModule(Modules, path.join(__dirname,"../","polyfill") );

module.exports={
    path:path.join(__dirname,"../","polyfill"),
    Modules,
}