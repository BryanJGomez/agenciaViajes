import Sequelize from 'sequelize';

const db = new Sequelize('agenciaviajes', 'bryanJ', 'bryan98Gomez',{
    host: '127.0.0.1',
    port: '3306',
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