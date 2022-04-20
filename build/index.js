"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server");
require("dotenv/config");
// parse the port from .env file
const port = process.env.PORT || 3000;
// start the server
server_1.server.listen(port, () => { console.log(`Server is running on port ${port}`); });
