const Sequelize = require('sequelize');

// const sequelize = new Sequelize(process.env.database, process.env.user, process.env.password, {
const sequelize = new Sequelize('atd', 'root', '@Mck_#321', {
    dialect: 'mysql',
    host: 'localhost',
    define: {
        timestamps: false // true by default. false because bydefault sequelize adds createdAt, modifiedAt columns with timestamps.if you want those columns make ths true.
    }
});

module.exports = sequelize;