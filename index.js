const express = require('express');
const cors = require('cors')
const routerIndex = require('./routes/index.router')
const {logErrors,errorHandler,boomErrorHandler} = require('./middleware/error.handler')



const app = express();
const port = process.env.PORT || 3005;
const whitelist = ['http://127.0.0.1:5500','http://localhost:3005']
const options = {
  origin: (origin,callback)=>{
    if (whitelist.includes(origin) || !origin){
      callback(null,true)
    }else
    {
      callback(new Error('No permitido'))
    }
  }
}
app.use(cors(options))
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
  //console.log('server on port:' + port)
});
