import { model, Model, models, Schema } from 'mongoose';
import IMotorcycle from '../Interfaces/IMotorcycle';

class MotorcycleODM {
  private schema: Schema;
  private model: Model<IMotorcycle>;

  constructor() {
    this.schema = new Schema<IMotorcycle>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: true },
      buyValue: { type: Number, required: true },
      category: { type: String, required: true },
      engineCapacity: { type: Number, required: true },
    });    
    this.model = models.Motorcycle || model('Motorcycle', this.schema);
  }

  public async create(newMotorcycle: IMotorcycle): Promise<IMotorcycle> {
    const createdMotorcycle = await this.model.create({ ...newMotorcycle });
    return createdMotorcycle;
  }

  public async getAll() {
    const allMotorcycles = await this.model.find();
    return allMotorcycles;
  }

  public async getById(id: string) {
    const motorcycle = await this.model.findById(id);
    return motorcycle;
  }

  public async updateById(id: string, newMotorcycle: IMotorcycle) {
    const response = await this.model.updateOne(
      { _id: id },
      { $set: newMotorcycle },
    );
    if (response.modifiedCount === 0) throw new Error('Motorcycle not Found');
  }
}

export default MotorcycleODM;
