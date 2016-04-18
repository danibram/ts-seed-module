"use strict";
var hello = (function () {
    function hello(greet) {
        this.greetings = {
            hey: 'hello world!'
        };
        return this.greetings.hey;
    }
    return hello;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = hello;
//# sourceMappingURL=hello-world.js.map