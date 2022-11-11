import Sequelize from 'sequelize';


// console.log(process.env.BD_NOMBRE);
const db = new Sequelize('agenciaViajes', 'root', 'bryanjgomez.22',{
        
    host: 'captain.server.bgmz.me',
    port: 3307,
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