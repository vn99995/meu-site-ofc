require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

// Rotas
const indexRoutes = require('./routes/index');
const authRoutes = require('./routes/auth');

app.use('/', indexRoutes);
app.use('/auth', authRoutes);

// Servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
