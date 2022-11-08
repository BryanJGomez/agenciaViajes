import Sequelize from 'sequelize';


// console.log(process.env.BD_NOMBRE);
const db = new Sequelize('agenciaViajes', 'desarrollo', 'bryangomez2021',{
        
    host: 'captain.servicios.saynets.com',
    port: 6969,
    dialect: 'mysql',
    define: {
            timestamps:false
    },
    pool:{
            max: 5,
            min: 0,
            acquire: 3000,
            idle:1000
    },
    operatorsAliases: false
});
export default db ;