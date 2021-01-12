import  express from 'express';
import router from './routes/index.js';
import db  from './config/db.js';
import dotenv from 'dotenv';
dotenv.config({path:"variables.env"})
const app = express();


//conectar la db de datos
db.authenticate()
    .then(()=> console.log('Base de datos conectada Exitosamente'))
    .catch(error=> console.log(error));


const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 4000;

//habilitar PUG
app.set('view engine', 'pug');

//obtener el anio actual
app.use((req, res, next)=>{

    const year = new Date();
    res.locals.nombreSitio = "Agencia De Viajes";
    res.locals.actualYear = year.getFullYear(); 

   return next();
})


//agregar body parse para leer los datos del fomrulario
app.use(express.urlencoded({extended: true}))




//definir la carpeta publica 
app.use(express.static('public'));

//agregamos router
app.use('/', router);

//puerto y host para la app


app.listen(port, host, ()=>{
    console.log(`El servidor esta funcionando en el puerto ${port}`);
})
