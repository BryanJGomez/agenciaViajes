import  express from 'express';
import router from './routes/index.js';


const app = express();

const port = process.env.PORT || 4000;

//habilitar PUG
app.set('view engine', 'pug');

//obtener el anio actual

//definir la carpeta publica 
app.use(express.static('public'));

//agregamos router
app.use('/', router);

app.listen(port, ()=>{
    console.log(`El servidor esta funcionando en el puerto ${port}`);
})
