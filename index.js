const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const hbs = require('express-handlebars');
const mongoClient = require('mongodb').MongoClient;

const app = express();
const url = 'mongodb://localhost:27017';
const dbName = 'Productos';

const client = new MongoClient(url);
var db = null;

//var productos = require('./DbOffside');

client.connect(function(err){
    if(error){
        console.error(err);
        return;
    }

    const db = client.db(dbName);
});

app.use(express.static('public'));

app.engine('handlebars', hbs());
app.set('view engine', 'handlebars');

//Ruta principal
app.get('/', function(request, response){
    var info = {
    };
    response.render('index', info);
});

//ruta productos
app.get('/products', function(request, response){
    const collection = db.collection('Productos');
    collection.find({
        genero:{
            '$eq': request.query.producto
        },
        indumentaria:{
            '$eq': request.query.producto
        },
        precio:{
            '$eq': request.query.producto
        }, 
        marca: {
            '$eq': request.query.producto
        }
    }).toArray(function(err,docs){

        if(error){
            console.error(err);
            response.send(err);
            return;
        }

        var contexto = {
            producto = docs,
        };
        response.render('products', contexto);
    });   
});


//Ruta para ver la descripcion de un producto
app.get('/description', function(request, response){
    //request.query.producto
    const collection = db.collection('Productos');
    collection.find({
    //Como paso la variable para saber cual producto escogí?
    titulo: {
        '$eq': request.query.producto
    }

    }).toArray(function(err,docs){
    if(error){
        console.error(err);
        response.send(err);
        return;
    }
    var contexto = {
        producto = docs,
    }; 
    response.render('description', contexto);
    });
});


// ruta carrito de compras
app.get('/car-shop', function(request, response){

 const collection = db.collection('Productos');

 collection.find({

 }).toArray(function(err,docs){

    if(error){
        console.error(err);
        response.send(err);
        return;
    }
    var contexto = {
        producto = docs,
    }; 
    response.render('car-shop', contexto);

 });
});

app.post('/api/agregarProducto/:producto', function(request, response){

    const collection = db.collection('Productos');

    collection.find(function(elem){

        if(elem.producto == req.params.producto) 
        return true;
    });

    collection.push({
        titulo = request.params.titulo,
        imagen = request.body.imagen,
        precio = request.body.precio,
    });

    response.send(request.params.producto);
});

app.listen(5500);
