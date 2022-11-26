import express from 'express';
import { router } from './router';
import mongoose from 'mongoose';

mongoose
  .connect('mongodb://127.0.0.1:27017')
  .then(() => {
    const app = express();

    app.use(express.json());

    app.use(router);

    app.listen(3001, () => {
      console.log('server is running on http://localhost:3001');
    });
  })
  .catch(() => console.log('Erro ao conectar ao mongo'));
