var SequelizeAuto = require('sequelize-auto')
var auto = new SequelizeAuto('angi', 'root', 'root');

auto.run(function (err) {
    if (err) throw err;
    console.log(auto.tables); // table list
    console.log(auto.foreignKeys); // foreign key list
});


var auto = new SequelizeAuto('angi', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    directory: false, // prevents the program from writing to disk
    port: '3306',
    additional: {
        timestamps: false
        //...
    },
    tables: ['unique', 'steps', 'user']
    //...
})
