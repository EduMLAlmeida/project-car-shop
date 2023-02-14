import { Request, Response } from 'express';
import MotorcycleService from '../Services/MotorcycleService';

class MotorcycleController {
  private req: Request;
  private res: Response;
  private motorcycleService: MotorcycleService;

  constructor(req: Request, res: Response) {
    this.req = req;
    this.res = res;
    this.motorcycleService = new MotorcycleService();
  }

  public async create() {
    const createdMotorcycle = await this.motorcycleService.create(this.req.body);
    return this.res.status(201).json(createdMotorcycle);
  }

  public async getAll() {
    const allMotorcycles = await this.motorcycleService.getAll();
    return this.res.status(200).json(allMotorcycles);
  }

  public async getById() {
    const isValidId = await this.motorcycleService.idValidate(this.req.params.id);
    if (!isValidId) return this.res.status(422).json({ message: 'Invalid mongo id' });
    
    try {
      const motorcycle = await this.motorcycleService.getById(this.req.params.id);
      return this.res.status(200).json(motorcycle);
    } catch (error) {
      return this.res.status(404).json({ message: 'Motorcycle not found' });
    }
  }

  public async updateById() {
    const isValidId = await this.motorcycleService.idValidate(this.req.params.id);
    if (!isValidId) return this.res.status(422).json({ message: 'Invalid mongo id' });
    
    try {
      const motorcycle = await this.motorcycleService.updateById(
        this.req.params.id,
        this.req.body,
      );
      return this.res.status(200).json(motorcycle);
    } catch (error) {
      return this.res.status(404).json({ message: 'Motorcycle not found' });
    }
  }
}

export default MotorcycleController;
