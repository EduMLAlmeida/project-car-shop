import express from 'express';
import CarController from './Controllers/CarController';
import MotorcycleController from './Controllers/MotorcycleController';

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

app.post(
  '/motorcycles',
  (req, res) => new MotorcycleController(req, res).create(),
);

app.get(
  '/motorcycles',
  (req, res) => new MotorcycleController(req, res).getAll(),
);

app.get(
  '/motorcycles/:id',
  (req, res) => new MotorcycleController(req, res).getById(),
);

app.put(
  '/motorcycles/:id',
  (req, res) => new MotorcycleController(req, res).updateById(),
);

export default app;
