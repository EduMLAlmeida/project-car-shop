import express from 'express';
import CarController from './Controllers/CarController';

const app = express();
app.use(express.json());

app.get(
  '/health',
  (_req, res) => res.status(200).json({ health: 'ok' }),
);

app.post(
  '/cars',
  (req, res) => new CarController(req, res).create(),
);

app.get(
  '/cars',
  (req, res) => new CarController(req, res).getAll(),
);

app.get(
  '/cars/:id',
  (req, res) => new CarController(req, res).getById(),
);

app.put(
  '/cars/:id',
  (req, res) => new CarController(req, res).updateById(),
);

export default app;
