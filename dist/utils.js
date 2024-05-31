"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generate = void 0;
function generate() {
    const subset = "abcdefghijklmnopqrstuvwxyz1234567890";
    let op = "";
    for (let i = 0; i < 5; i++) {
        op += subset[Math.floor(Math.random() * (subset.length))];
    }
    return op;
}
exports.generate = generate;
