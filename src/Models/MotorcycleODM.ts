import { Schema } from 'mongoose';
import IMotorcycle from '../Interfaces/IMotorcycle';
import AbstractODM from './AbstractODM';

class MotorcycleODM extends AbstractODM<IMotorcycle> {
  constructor() {
    const schema = new Schema<IMotorcycle>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: true },
      buyValue: { type: Number, required: true },
      category: { type: String, required: true },
      engineCapacity: { type: Number, required: true },
    });    
    super(schema, 'Motorcycle');
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
