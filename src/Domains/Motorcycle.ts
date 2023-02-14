import IMotorcycle from '../Interfaces/IMotorcycle';

class Motorcycle {
  protected id: string | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status: boolean | undefined;
  protected buyValue: number;
  private category: string;
  private engineCapacity: number;

  constructor(newMotorcycle: IMotorcycle) {
    this.id = newMotorcycle.id;
    this.model = newMotorcycle.model;
    this.year = newMotorcycle.year;
    this.color = newMotorcycle.color;
    this.status = newMotorcycle.status;
    this.buyValue = newMotorcycle.buyValue;
    this.category = newMotorcycle.category;
    this.engineCapacity = newMotorcycle.engineCapacity;
  }
}

export default Motorcycle;
