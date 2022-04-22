"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorPage = void 0;
const errorPage = (req, res) => {
    res.status(404).send('404 Not Found');
};
exports.errorPage = errorPage;
