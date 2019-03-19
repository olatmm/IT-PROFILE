"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var hbs = require('express-handlebars');
var path_1 = __importDefault(require("path"));
var routes = require('./routes/index');
var app = express_1.default();
app.set("port", process.env.PORT || 3000);
//API EndPoint
app.engine('hbs', hbs({
    extname: 'hbs',
    defaultLayout: 'layout',
    layoutDir: __dirname + '../build/views/'
}));
app.set('views', path_1.default.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
app.use('/', routes);
exports.default = app;
//# sourceMappingURL=app.js.map