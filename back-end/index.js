const sequelize = require('./configurations/config').default;
const express = require('express');
const cors = require('cors');
const app = express();
const books_router = require('./routes/books');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


// Sync your Sequelize models
sequelize.sync()
  .then(() => {
    console.log('Database synced');
  })
  .catch((err) => {
    console.error('Error syncing database:', err);
  });

// Optional root route
app.get('/', function (req, res) {
  // res.sendFile(path.join(__dirname + '/dist/front-end/index.html'));
});

// Use the books router for all /books routes
app.use('/books', books_router);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
