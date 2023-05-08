"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var body_parser_1 = require("body-parser");
var app = (0, express_1.default)();
var PORT = 3000;
app.use(body_parser_1.default.json());
app.get('/', function (req, res) {
    res.send('Hello, world!');
});
app.listen(PORT, function () {
    console.log("Server listening on port ".concat(PORT));
});
