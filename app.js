const express = require('express');
const app = express();
const path = require('path');
const session = require('express-session');
const cookies = require('cookie-parser');

app.use(session({
    secret: 'Shh, es un secreto!',
    resave: false,
    saveUninitialized: false
}));

app.use(cookies());

const publicPath= path.resolve(__dirname, './public');
console.log(publicPath);

const methodOverride =  require('method-override'); // Pasar poder usar los métodos PUT y DELETE
app.set('view engine', 'ejs');


app.use(express.static(publicPath));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method')); // Pasar poder pisar el method="POST" en el formulario por PUT y DELETE

// Routers
const mainRouter = require('./routes/main');
const productsRouter = require('./routes/products');
const usersRouter = require('./routes/users');

app.use(mainRouter);
app.use('/products', productsRouter);
app.use(usersRouter);

const PORT = process.env.PORT || 3000

app.use((req, res, next) => {
    res.status(404).render('./errores/error404');
   })

app.listen(PORT,()=> console.log('Servidor corriendo'));

