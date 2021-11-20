"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var sxCompose = function () {
    var sx = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        sx[_i] = arguments[_i];
    }
    return sx.reduce(function (acc, curr) {
        if (curr.condition) {
            return __assign(__assign({}, acc), curr.sx);
        }
        return __assign(__assign({}, acc), curr);
    }, {});
};
exports.default = sxCompose;
