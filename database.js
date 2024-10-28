const { Sequelize } = require('sequelize');

// Create a new instance of Sequelize
const sequelize = new Sequelize('education_management', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});





// // Test the connection
// sequelize.authenticate()
//     .then(() => {
//         console.log('Connection has been established successfully.');

//   })                                                                                                               .catch(err => {
//         console.error('Unable to connect to the database:', err);
//   });
    



sequelize.authenticate()
    .then(() => console.log('Connection has been established successfully.'))
    .catch((err) => console.error('Error creating tables:', err));


module.exports = sequelize;