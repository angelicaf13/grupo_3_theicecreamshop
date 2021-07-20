const express = require('express');
const app = express();
const path = require('path');
const mainRouter = require('./routes/main');
const productsRouter = require('./routes/products');
const usersRouter = require('./routes/users');
const PORT = process.env.PORT || 3000

app.set('view engine', 'ejs');

const publicPath= path.resolve(__dirname, './public');
console.log(publicPath);

app.use(express.static(publicPath));

app.use(mainRouter);
app.use(productsRouter);
app.use(usersRouter);

app.use((req, res, next) => {
    res.status(404).render('./errores/error404');
   })

app.listen(PORT,()=> console.log('Servidor corriendo'));