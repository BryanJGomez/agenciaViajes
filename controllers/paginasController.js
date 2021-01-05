import {Viajes} from '../Models/Viajes.js';


const paginaInicio = (req, res)=>{ // req lo que estamos enviando || res lo que express nos responde
    res.render('inicio',{
        pagina: 'Inicio'
    });
     
}

const paginaNosotros =(req, res)=>{ // req lo que estamos enviando || res lo que express nos responde
    res.render ('nosotros', {
        pagina: 'Nosotros'
    });
     
}

const paginaViajes = async (req, res)=>{ // req lo que estamos enviando || res lo que express nos responde
    //consultar BD
    const viaje = await Viajes.findAll();
    console.log(viaje);
    
    res.render ('viajes', {
        pagina: 'Proximos Viajes',
        viaje,
    });
     
}

const paginaTestimoniales = (req, res)=>{ // req lo que estamos enviando || res lo que express nos responde
    res.render ('testimoniales', {
        pagina: 'Testimoniales'
    });
     
}

//muestra el slug
const paginaDetalleViajes = async (req, res) =>{
    const  {slug} = req.params

    try {
        const viaje = await Viajes.findOne({where :{slug  }})
        res.render('viaje',{
            pagina: ' Informacion viaje ',
            viaje
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