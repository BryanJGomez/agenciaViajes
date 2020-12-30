import  express from 'express';

const router = express.Router();

router.get('/inicio', (req, res)=>{ // req lo que estamos enviando || res lo que express nos responde
    res.send ('Inicio');
     
});

router.get('/nosotros', (req, res)=>{ // req lo que estamos enviando || res lo que express nos responde
 
    res.render ('nosotros');
     
});



export default router;