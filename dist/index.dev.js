"use strict";

var _express = _interopRequireDefault(require("express"));

var _index = _interopRequireDefault(require("./routes/index.js"));

var _db = _interopRequireDefault(require("./config/db.js"));

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config({
  path: "variables.env"
});

var app = (0, _express["default"])(); //conectar la db de datos

_db["default"].authenticate().then(function () {
  return console.log('Base de datos conectada Exitosamente');
})["catch"](function (error) {
  return console.log(error);
});

var host = process.env.HOST || '0.0.0.0';
var port = process.env.PORT || 4000; //habilitar PUG

app.set('view engine', 'pug'); //obtener el anio actual

app.use(function (req, res, next) {
  var year = new Date();
  res.locals.nombreSitio = "Agencia De Viajes";
  res.locals.actualYear = year.getFullYear();
  return next();
}); //agregar body parse para leer los datos del fomrulario

app.use(_express["default"].urlencoded({
  extended: true
})); //definir la carpeta publica 

app.use(_express["default"]["static"]('public')); //agregamos router

app.use('/', _index["default"]); //puerto y host para la app

app.listen(port, host, function () {
  console.log("El servidor esta funcionando en el puerto ".concat(port));
});