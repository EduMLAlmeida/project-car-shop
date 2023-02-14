import { model, Model, models, Schema } from 'mongoose';

abstract class AbstractODM<T> {
  protected model: Model<T>;
  protected schema: Schema;
  protected modelName: string;

  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[this.modelName] || model(this.modelName, this.schema);
  }

  public async create(newVehicle: T): Promise<T> {
    const createdVehicle = await this.model.create({ ...newVehicle });
    return createdVehicle;
  }

  public async getAll() {
    const allVehicles = await this.model.find();
    return allVehicles;
  }

  public async getById(id: string) {
    const vehicle = await this.model.findById(id);
    return vehicle;
  }
}

export default AbstractODM;
