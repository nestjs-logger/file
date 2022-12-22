"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileLogger = void 0;
var fs_1 = require("fs");
var path_1 = require("path");
var os_1 = require("os");
var dayjs_1 = __importDefault(require("dayjs"));
var FileLogger = /** @class */ (function () {
    function FileLogger(options) {
        this.options = options;
        //
    }
    FileLogger.prototype.createPath = function (level) {
        var _a = this.options, directory = _a.directory, filename = _a.filename, extension = _a.extension;
        return (0, path_1.join)(directory, "".concat(filename !== null && filename !== void 0 ? filename : 'nest', "-").concat(level, ".").concat(extension !== null && extension !== void 0 ? extension : 'log'));
    };
    FileLogger.prototype.log = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        var data = JSON.stringify({
            message: message,
            optionalParams: optionalParams,
        }, null, '\t');
        (0, fs_1.appendFileSync)(this.createPath('log'), "[".concat((0, dayjs_1.default)().format('YYYY-MM-DD HH:mm:ss'), "] ").concat(data).concat(os_1.EOL));
    };
    FileLogger.prototype.error = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        var data = JSON.stringify({
            message: message,
            optionalParams: optionalParams,
        }, null, '\t');
        (0, fs_1.appendFileSync)(this.createPath('error'), "[".concat((0, dayjs_1.default)().format('YYYY-MM-DD HH:mm:ss'), "] ").concat(data).concat(os_1.EOL));
    };
    FileLogger.prototype.warn = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        var data = JSON.stringify({
            message: message,
            optionalParams: optionalParams,
        }, null, '\t');
        (0, fs_1.appendFileSync)(this.createPath('warn'), "[".concat((0, dayjs_1.default)().format('YYYY-MM-DD HH:mm:ss'), "] ").concat(data).concat(os_1.EOL));
    };
    FileLogger.prototype.debug = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        var data = JSON.stringify({
            message: message,
            optionalParams: optionalParams,
        }, null, '\t');
        (0, fs_1.appendFileSync)(this.createPath('debug'), "[".concat((0, dayjs_1.default)().format('YYYY-MM-DD HH:mm:ss'), "] ").concat(data).concat(os_1.EOL));
    };
    FileLogger.prototype.verbose = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        var data = JSON.stringify({
            message: message,
            optionalParams: optionalParams,
        }, null, '\t');
        (0, fs_1.appendFileSync)(this.createPath('verbose'), "[".concat((0, dayjs_1.default)().format('YYYY-MM-DD HH:mm:ss'), "] ").concat(data).concat(os_1.EOL));
    };
    FileLogger.create = function (options) {
        return new FileLogger(options);
    };
    return FileLogger;
}());
exports.FileLogger = FileLogger;
