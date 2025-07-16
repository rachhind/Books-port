const sequelize = require('./configurations/config');
const express = require('express');
const cors = require('cors');
const app = express();
const books_router = require('./routes/books');
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

sequelize.sync().then((result)=>{}).catch((err)=>{console.log(err);});


app.get('/', function(req,res) {
   // res.sendFile(path.join(__dirname+'/dist/front-end/index.html'));
    });



app.use('/books', books_router);



app.listen(3000, ()=>{console.log('the server is on');})