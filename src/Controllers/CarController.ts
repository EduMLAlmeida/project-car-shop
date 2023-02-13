import { Request, Response } from 'express';
import CarService from '../Services/CarService';

class CarController {
  private req: Request;
  private res: Response;
  private carService: CarService;

  constructor(req: Request, res: Response) {
    this.req = req;
    this.res = res;
    this.carService = new CarService();
  }

  public async create() {
    const createdCar = await this.carService.create(this.req.body);
    return this.res.status(201).json(createdCar);
  }
}

export default CarController;
