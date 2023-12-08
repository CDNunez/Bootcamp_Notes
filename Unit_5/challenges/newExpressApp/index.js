const express = require('express');
const app = express();
const PORT = 4000;

const { getTimestamp, sayHello } = require('./utils/middleware');
const controller = require('./controllers/routes.controller')

app.use(express.json());
app.use(getTimestamp);
// app.use(sayHello);

app.use('/routes', controller);

app.listen(PORT, () => console.log(`Running: ${PORT}`));