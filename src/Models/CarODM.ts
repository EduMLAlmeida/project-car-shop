import { Schema } from 'mongoose';
import ICar from '../Interfaces/ICar';
import AbstractODM from './AbstractODM';

class CarODM extends AbstractODM<ICar> {
  constructor() {
    const schema = new Schema<ICar>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: true },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });
    super(schema, 'Car');
  }

  public async updateById(id: string, newCar: ICar) {
    const response = await this.model.updateOne(
      { _id: id },
      { $set: newCar },
    );
    if (response.modifiedCount === 0) throw new Error('Car not Found');
  }
}

export default CarODM;
