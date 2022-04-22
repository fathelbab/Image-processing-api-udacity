"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
require("dotenv/config");
const getImage_1 = __importDefault(require("./routes/api/getImage"));
// parse the port from .env file
const port = process.env.PORT || 3000;
// app.use('/api', routes);
app_1.app.use('/api/images', getImage_1.default);
// start the server
app_1.app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
