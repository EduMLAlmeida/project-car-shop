import { model, Model, models, Schema } from 'mongoose';
import ICar from '../Interfaces/ICar';

class CarODM {
  private schema: Schema;
  private model: Model<ICar>;

  constructor() {
    this.schema = new Schema<ICar>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: true },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });    
    this.model = models.Car || model('Car', this.schema);
  }

  public async create(newCar: ICar): Promise<ICar> {
    const createdCar = await this.model.create({ ...newCar });
    return createdCar;
  }

  public async getAll() {
    const allCars = await this.model.find();
    return allCars;
  }

  public async getById(id: string) {
    const car = await this.model.findById(id);
    return car;
  }
}

export default CarODM;
