"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const resize_1 = require("../../module/resize");
const image = express_1.default.Router();
image.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const width = parseInt(req.query.width);
    const height = parseInt(req.query.height);
    const filename = req.query.filename;
    // check if the file name exists
    if (!filename) {
        res.status(400).send('you are missing the photo name');
        return;
    }
    // check if the width is valid
    if (!width || width === 0 || width < 0) {
        res
            .status(400)
            .send('please type a valid width');
        return;
    }
    //    check if the height is valid
    if (!height || height === 0 || height < 0) {
        res
            .status(400)
            .send('please type a valid height');
        return;
    }
    // start resizing
    try {
        const outputThumb = yield (0, resize_1.resize)(width, height, filename);
        res.sendFile(outputThumb);
    }
    catch (error) {
        res.status(404).send('required image not found');
    }
}));
exports.default = image;
