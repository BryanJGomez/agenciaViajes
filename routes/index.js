import  express from 'express';

const route = express.Router();

route.get('/', (req, res)=>{ // req lo que estamos enviando || res lo que express nos responde
    res.send ('Inicio');
     
});

route.get('/nosotros', (req, res)=>{ // req lo que estamos enviando || res lo que express nos responde
    res.send ('Nosotros');
     
});

route.get('/contacto', (req, res)=>{ // req lo que estamos enviando || res lo que express nos responde
    res.send ('Contacto');
     
});