import express from 'express';
import { router } from './router';
import mongoose from 'mongoose';

const app = express();

mongoose
  .connect('mongodb://127.0.0.1:27017')
  .then(() => {
    app.use((req, res, next) => {
      res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
      res.setHeader('Access-Control-Allow-Methods', '*');
      res.setHeader('Access-Control-Allow-Headers', '*');

      next();
    });

    app.use(express.json());

    app.use(router);

    app.listen(3001, () => {
      console.log('server is running on http://localhost:3001');
    });
  })
  .catch(() => console.log('Erro ao conectar ao mongo'));
