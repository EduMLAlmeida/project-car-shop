import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';
import Car from '../Domains/Car';

class CarService {
  private carODM: CarODM;

  constructor() {
    this.carODM = new CarODM();
  }

  public async create(newCar: ICar) {
    const car = newCar;
    if (!newCar.status) {
      car.status = false;
    }
    const createdCar = await this.carODM.create(car);
    return new Car(createdCar);
  }

  public async getAll() {
    const allCars = await this.carODM.getAll();
    return allCars.map((car) => new Car(car));
  }

  public async idValidate(id: string) {
    // fonte regex -> https://stackoverflow.com/questions/20988446/regex-for-mongodb-objectid
    const idRegex = /^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/i;
    return idRegex.test(id);
  }

  public async getById(id: string) {
    const car = await this.carODM.getById(id);
    return new Car(car as ICar);
  }
}

export default CarService;
