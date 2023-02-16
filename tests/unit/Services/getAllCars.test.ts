import { Model } from 'mongoose';
import sinon from 'sinon';
import { expect } from 'chai';
import CarService from '../../../src/Services/CarService';
import Car from '../../../src/Domains/Car';

describe('Deveria listar todos carros', function () {
  it('Deveria listar todos carros com SUCESSO', async function () {
    // Arrange
    
    const carsOutput = [{
      model: 'Gol',
      year: 2021,
      color: 'white',
      status: true,
      buyValue: 300.000,
      doorsQty: 2,
      seatsQty: 5,
      id: '63319d80feb9f483ee823ac5',
    }, {
      model: 'Huno',
      year: 2022,
      color: 'Red',
      status: true,
      buyValue: 323.000,
      doorsQty: 4,
      seatsQty: 5,
      id: '63319d34feb9f928ee823re5',
    }];
    sinon.stub(Model, 'find').resolves(carsOutput);
    // Act
    const carService = new CarService();
    const result = await carService.getAll();
    // Assert
    expect(result).to.be.deep.equal(carsOutput.map((car) => new Car(car)));
    sinon.restore();
  });
});