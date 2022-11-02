const Sequelize = require('sequelize');

// const sequelize = new Sequelize(process.env.database, process.env.user, process.env.password, {
// const sequelize = new Sequelize('ultimate2', 'root', 'Puj@321#', {
// const sequelize = new Sequelize('ultimate2', 'root', 'CHI@#321#', {  // Chilaw
// const sequelize = new Sequelize('ultimate2', 'root', 'KULIUC@#321#', {  //MCK
// const sequelize = new Sequelize("online_test", "root","IBBA@#321$%" , { //Ibbagamuwa
const sequelize = new Sequelize("online_test", "root","NATH@#$321$%" , { //Naththandiya
    port: 3306,
    host: "124.43.4.231",
    dialect: 'mysql',
    define: {
        timestamps: false // true by default. false because bydefault sequelize adds createdAt, modifiedAt columns with timestamps.if you want those columns make ths true.
    }
});

module.exports = sequelize;