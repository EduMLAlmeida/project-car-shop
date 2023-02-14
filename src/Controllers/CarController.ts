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

  public async getAll() {
    const allCars = await this.carService.getAll();
    return this.res.status(200).json(allCars);
  }

  public async getById() {
    const isValidId = await this.carService.idValidate(this.req.params.id);
    if (!isValidId) return this.res.status(422).json({ message: 'Invalid mongo id' });
    
    try {
      const car = await this.carService.getById(this.req.params.id);
      return this.res.status(200).json(car);
    } catch (error) {
      return this.res.status(404).json({ message: 'Car not found' });
    }
  }

  public async updateById() {
    const isValidId = await this.carService.idValidate(this.req.params.id);
    if (!isValidId) return this.res.status(422).json({ message: 'Invalid mongo id' });
    
    try {
      const car = await this.carService.updateById(
        this.req.params.id,
        this.req.body,
      );
      return this.res.status(200).json(car);
    } catch (error) {
      return this.res.status(404).json({ message: 'Car not found' });
    }
  }
}

export default CarController;
