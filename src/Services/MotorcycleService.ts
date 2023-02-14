import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';
import Motorcycle from '../Domains/Motorcycle';

class MotorcycleService {
  private motorcycleODM: MotorcycleODM;

  constructor() {
    this.motorcycleODM = new MotorcycleODM();
  }

  public async create(newMotorcycle: IMotorcycle) {
    const motorcycle = newMotorcycle;
    if (!newMotorcycle.status) {
      motorcycle.status = false;
    }
    const createdMotorcycle = await this.motorcycleODM.create(motorcycle);
    return new Motorcycle(createdMotorcycle);
  }

  public async getAll() {
    const allMotorcycles = await this.motorcycleODM.getAll();
    return allMotorcycles.map((motorcycle) => new Motorcycle(motorcycle));
  }

  public async idValidate(id: string) {
    // fonte regex -> https://stackoverflow.com/questions/20988446/regex-for-mongodb-objectid
    const idRegex = /^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/i;
    return idRegex.test(id);
  }

  public async getById(id: string) {
    const motorcycle = await this.motorcycleODM.getById(id);
    return new Motorcycle(motorcycle as IMotorcycle);
  }

  public async updateById(id: string, newMotorcycle: IMotorcycle) {
    await this.motorcycleODM.updateById(id, newMotorcycle);
    const motorcycle = { ...newMotorcycle, id };
    return new Motorcycle(motorcycle as IMotorcycle);
  }
}

export default MotorcycleService;
