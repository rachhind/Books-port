import Sequelize from 'sequelize';

const sequelize = new Sequelize('books_portal', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

export default sequelize;
