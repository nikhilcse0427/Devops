const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const { errorHandler } = require('./middlewares/error.middleware');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res)=>{
  res.send("welcome to server!");
})
app.use('/api/v1', routes);

// Error Handling Middleware
app.use(errorHandler);

module.exports = app;
