const Sequelize = require('sequelize');
const sequelize = new Sequelize('books_portal', 'rachhind', 'p00p', {dialect: 'mysql'});
module.exports = sequelize;
            