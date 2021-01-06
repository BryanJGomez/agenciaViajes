import Sequelize from 'sequelize';
import db from '../config/db.js';


//aqui se define el apartado de tus tablas de base de datos
export const Testimonial = db.define('testimoniales',{
    nombre: {
        type: Sequelize.STRING
    },
    correo: {
        type: Sequelize.STRING
    },
    mensaje: {
        type: Sequelize.STRING
    },
   
});