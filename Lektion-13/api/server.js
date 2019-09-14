const http = require("http");
const api = require("./api.js");

http.createServer(api).listen(9999, () => console.log("WEB SERVER: http://localhost:9999"));