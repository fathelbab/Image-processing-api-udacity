"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const logger_1 = require("./middleware/logger");
// create the app object
exports.app = (0, express_1.default)();
// using the logger middleware and error page for the Application
exports.app.use(logger_1.loggerMiddleware);
