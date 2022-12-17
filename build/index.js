"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Get the environment variables
require('dotenv').config();
// Require needed node modules
var express_1 = __importDefault(require("express"));
// Initialize your application by calling the function returned by the express module
var app = (0, express_1.default)();
// Declare routes that people can visit on the application
// White Page
app.get('/', function (req, res) {
    res.send("\n        <body style=\"margin: 0;\">\n            <div style=\"border: 1px solid black; height: 10vh; background-color: white;\">\n                <h2 style=\"text-align: center;\">NAV BAR</h2>\n            </div>\n            <h1>White Page</h1>\n        </body>\n    ");
});
// Color Page
app.get('/:color', function (req, res) {
    var myColor = req.params.color;
    res.send("\n        <body style=\"margin: 0;\">\n            <div style=\"border: 1px solid black; height: 10vh; background-color: ".concat(myColor, ";\">\n                <h2 style=\"text-align: center;\">NAV BAR</h2>\n            </div>\n            <h1 style=\"color: ").concat(myColor, ";\">").concat(myColor.charAt(0).toUpperCase() + myColor.slice(1), " Page</h1>\n        </body>\n    "));
});
// Listen to a port number defined by a local environment variable
app.listen(process.env.PORT);
