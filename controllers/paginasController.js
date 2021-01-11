import {Viaje} from '../Models/Viajes.js';
import {Testimonial} from '../Models/testimoniales.js';

const paginaInicio = async (req, res)=>{ // req lo que estamos enviando || res lo que express nos responde

    //consultar 3 viajes  del modelo vista
    const promiseDB = [];

    promiseDB.push(Viaje.findAll({limit: 3}));
    promiseDB.push(Testimonial.findAll({limit: 3}));

    try {
        const resultado = await Promise.all(promiseDB);
        

    res.render('inicio',{
        pagina: 'Inicio',
        clase: 'home',
        viajes:resultado [0],
        testimoniales: resultado[1]
    });
     

    } catch (error) {
        console.log(error);
    }

}

const paginaNosotros =(req, res)=>{ // req lo que estamos enviando || res lo que express nos responde
    res.render ('nosotros', {
        pagina: 'Nosotros'
    });
     
}

const paginaViajes = async (req, res)=>{ // req lo que estamos enviando || res lo que express nos responde
    //consultar BD
    const viajes = await Viaje.findAll();
    console.log(viajes);
    
    res.render ('viajes', {
        pagina: 'Proximos Viajes',
        viajes,
    });
     
}

const paginaTestimoniales = async (req, res)=>{ // req lo que estamos enviando || res lo que express nos responde
        try {
            const testimoniales = await Testimonial.findAll();
            res.render ('testimoniales', {
                pagina: 'Testimoniales',
                testimoniales
            });
             
        } catch (error) {
            console.log(error);
        }
}

//muestra el slug
const paginaDetalleViajes = async (req, res) =>{
    const  {slug} = req.params

    try {
        const viajes = await Viaje.findOne({where :{slug  }})
        res.render('viaje',{
            pagina: ' Informacion viaje ',
            viajes
        })
    } catch (error) {
        console.log(error);
        
    }
}

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViajes
}