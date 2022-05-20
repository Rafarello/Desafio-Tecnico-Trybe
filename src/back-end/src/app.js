/* eslint-disable no-console */
/* eslint-disable require-jsdoc */
const express = require('express');
const cors = require('cors');
const connectToDatabase = require('./database/connection');

class App {
  constructor() {
    this.app = express();
    this.config();
    this.app.use(express.json());
    this.app.use(express.static('public'));
  }

  // Função config serve para determinar os controles de acessos
  // autorizados para nosso projeto,

  config() {
    const accessControl = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header(
          'Access-Control-Allow-Methods',
          'GET,POST,DELETE,OPTIONS,PUT,PATCH',
      );
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(accessControl);
    this.app.use(cors());
    // Rota teste do servidor
    this.app.get('/teste', (_request, response) => {
      response.status(200).json({ message: 'Server is working' });
    });
  }

  addRouter(router) {
    this.app.use(router);
  }

  start(PORT) {
    connectToDatabase();
    this.app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));
  }
}

module.exports = App;
