const express = require('express');
const routerIndex = require('./routes/index.router')
const app = express();
const port = 3005;

app.use(express.json())
app.get('/', (req, res) => {
  res.send('hola a todo');
});

routerIndex(app)

app.listen(port, () => {
  console.log('server on port:' + port)
});
