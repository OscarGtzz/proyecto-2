const path = require('path');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();

//const MongoClient = require('mongodb').MongoClient;
//const uri = "mongodb+srv://Usuario:asdqwe123@cluster0.ktsp5.mongodb.net/admin?retryWrites=true&w=majority";
//const client = new MongoClient(uri, { useNewUrlParser: true });
//client.connect(err => {
//  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
//  client.close();
//});

//mongoose.connect("mongodb://mongo/proyectodb2")
mongoose.connect(
  "mongodb+srv://Usuario:asdqwe123@cluster0.ktsp5.mongodb.net/cluster0?retryWrites=true&w=majority",
  {useUnifiedTopology: true, useNewUrlParser: true})
  .then(db => console.log('db connected'))
  .catch(err => console.log(err));



const indexRoutes = require('./routes/index');


app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}))

app.use('/', indexRoutes);

app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`);
});

