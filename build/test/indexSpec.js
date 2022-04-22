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
const getImage_1 = require("../routes/api/getImage");
const supertest_1 = __importDefault(require("supertest"));
const app_1 = require("../app");
const req = (0, supertest_1.default)(app_1.app);
// Testing image processing 
describe('Test Resizing the image', () => {
    it('expects the file to be resized', () => __awaiter(void 0, void 0, void 0, function* () {
        yield expectAsync((0, getImage_1.resizeImage)(300, 200, 'a')).toBeResolved();
    }));
    it('expects to throw an error if the file doesnt exist', () => __awaiter(void 0, void 0, void 0, function* () {
        yield expectAsync((0, getImage_1.resizeImage)(400, 400, 'non-exist-file')).toBeRejected();
    }));
});
// Testing endpoints 
describe('Test endpoints response', () => {
    // test failure 
    it('gets error if file missing', () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield req.get('/api/images?filename=z&width=200&height=200');
        expect(res.status).toBe(404);
    }));
    //invalid query testing
    it('gets error if height query is invalid', () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield req.get('/api/images?filename=a&width=200&height=0');
        expect(res.status).toBe(404);
    }));
    it('gets error if width query is invalid', () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield req.get('/api/images?filename=a&width=0&height=300');
        expect(res.status).toBe(404);
    }));
    it('gets error if filename query is invalid', () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield req.get('/api/images?filename=&width=200&height=300');
        expect(res.status).toBe(404);
    }));
});
