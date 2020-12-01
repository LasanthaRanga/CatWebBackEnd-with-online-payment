const Sequelize = require('sequelize');

// const sequelize = new Sequelize(process.env.database, process.env.user, process.env.password, {

// const sequelize = new Sequelize('atd', 'root', 'root', {
// const sequelize = new Sequelize('ultimate2', 'root', 'CHI@#321#', {  // Chilaw
const sequelize = new Sequelize('ibbagamuwaps', 'root', '3ta@kela#una@', {  //MCK
    dialect: 'mysql',
    host: '124.43.11.162',
    port: 3307,
    define: {
        timestamps: false // true by default. false because bydefault sequelize adds createdAt, modifiedAt columns with timestamps.if you want those columns make ths true.
    }
});

module.exports = sequelize;