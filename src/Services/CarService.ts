import ICar from '../Interfaces/ICar';
// import ICarODM from '../Interfaces/ICarODM';
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
}

export default CarService;
