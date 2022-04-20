const express = require('express');
const routerIndex = require('./routes/index.router')
const {logErrors,errorHandler,boomErrorHandler} = require('./middleware/error.handler')


const app = express();
const port = 3005;

app.use(express.json())
app.get('/', (req, res) => {
  res.send('hola a todo');
});

routerIndex(app)

//middleware de errores van despues del routing y se coloca por orden de inicio
app.use(logErrors)
app.use(boomErrorHandler)
app.use(errorHandler)

app.listen(port, () => {
  console.log('server on port:' + port)
});
