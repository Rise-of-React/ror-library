"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.permutator = void 0;
exports.permutator = function (inputArr) {
    var result = [];
    var permute = function (arr, m) {
        if (m === void 0) { m = []; }
        if (arr.length === 0) {
            result.push(m);
        }
        else {
            for (var i = 0; i < arr.length; i++) {
                var curr = arr.slice();
                var next = curr.splice(i, 1);
                permute(curr.slice(), m.concat(next));
            }
        }
    };
    permute(inputArr);
    return result;
};
