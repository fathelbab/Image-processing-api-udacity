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
exports.resize = void 0;
const path_1 = __importDefault(require("path"));
const fs_1 = require("fs");
const fs_2 = __importDefault(require("fs"));
const sharp_1 = __importDefault(require("sharp"));
const resize = (width, height, imgName) => __awaiter(void 0, void 0, void 0, function* () {
    const outputFolderPath = path_1.default.join(__dirname, '..', '..', 'thumb', `${imgName}${width}x${height}.jpg`);
    const imageFolderPath = path_1.default.join(__dirname, '..', '..', 'full', `${imgName}.jpg`);
    try {
        const outPutPath = path_1.default.join(__dirname, '..', '..', 'thumb');
        if (!fs_2.default.existsSync(outPutPath)) {
            fs_2.default.mkdirSync(path_1.default.join(__dirname, '..', '..', 'thumb'));
        }
        yield fs_1.promises.access(outputFolderPath);
    }
    catch (error) {
        yield (0, sharp_1.default)(imageFolderPath).resize(width, height).toFile(outputFolderPath);
    }
    return outputFolderPath;
});
exports.resize = resize;
