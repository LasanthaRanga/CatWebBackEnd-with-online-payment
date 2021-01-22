const Sequelize = require('sequelize');

// const sequelize = new Sequelize(process.env.database, process.env.user, process.env.password, {

const sequelize = new Sequelize('atd2', 'root', 'root', {
    // const sequelize = new Sequelize('ultimate2', 'root', 'Puj@321#', {
    // const sequelize = new Sequelize('ultimate2', 'root', 'CHI@#321#', {  // Chilaw
    // const sequelize = new Sequelize('ultimate2', 'root', 'KULIUC@#321#', {  //MCK
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    define: {
        timestamps: false // true by default. false because bydefault sequelize adds createdAt, modifiedAt columns with timestamps.if you want those columns make ths true.
    }
});

module.exports = sequelize;