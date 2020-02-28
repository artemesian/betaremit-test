const express=require('express')
const app=express();
const mongoose=require('mongoose');
const Product=require('./models/product')
const cors = require('cors');
const bodyParser = require('body-parser');
const del = require('./controllers/del.js');
const getAll = require('./controllers/getAll.js');
const add = require('./controllers/add.js');
const update = require('./controllers/update.js');

app.use(bodyParser.json());
app.use(cors())
mongoose.connect('mongodb+srv://betaremit_db:@betaremit_db@cluster0-mcov3.mongodb.net/test?retryWrites=true&w=majority',
{
	useNewUrlParser:true,
	useUnifiedTopology:true
})
.then(()=>console.log('Connection Succes'))
.catch(()=>console.log('Connection Failed'));

app.get('/', (req, res)=> getAll(req, res))
app.post('/add', (req, res)=> add(req, res))
app.delete('/del/:id', (req, res) =>del(req, res))
app.put('/update', (req, res) =>update(req, res))

module.exports=app;