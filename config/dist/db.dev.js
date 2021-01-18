"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// console.log(process.env.BD_NOMBRE);
var db = new _sequelize["default"]('agenciaViajes', 'bryanJ', 'bryan98Gomez', {
  host: 'localhost',
  port: '3306',
  dialect: 'mysql',
  define: {
    timestamps: false
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 3000,
    idle: 1000
  },
  operatorsAliases: false
});
var _default = db;
exports["default"] = _default;