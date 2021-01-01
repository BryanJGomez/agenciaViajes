import  express from 'express';
import router from './routes/index.js';
import db from './config/db';


const app = express();


//conectar la base de datos
db.authenticate()
    .then(()=> console.log('Base de datos conectada Exitosamente'))
    .catch(error=> console.log(error));


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
//definir la carpeta publica 
app.use(express.static('public'));

//agregamos router
app.use('/', router);

app.listen(port, ()=>{
    console.log(`El servidor esta funcionando en el puerto ${port}`);
})
