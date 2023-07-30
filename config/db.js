import Sequelize from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

const dbName = process.env.BD_NOMBRE;
const dbUser = process.env.BD_USER;
const dbPassword = process.env.BD_PASS;
const dbHost = process.env.BD_HOST;
const dbPort = process.env.BD_PORT;


const db = new Sequelize(dbName, dbUser, dbPassword,{
        
    host: dbHost,
    port: dbPort,
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