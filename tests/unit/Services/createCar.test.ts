import { Model } from 'mongoose';
import sinon from 'sinon';
import { expect } from 'chai';
import CarService from '../../../src/Services/CarService';
import Car from '../../../src/Domains/Car';

describe('Deveria criar um novo carro', function () {
  it('Deveria criar um carro com SUCESSO', async function () {
    // Arrange
    const carInput = {
      model: 'Gol',
      year: 2021,
      color: 'white',
      status: true,
      buyValue: 300.000,
      doorsQty: 2,
      seatsQty: 5,
    };
    const carOutput = {
      model: 'Gol',
      year: 2021,
      color: 'white',
      status: true,
      buyValue: 300.000,
      doorsQty: 2,
      seatsQty: 5,
      id: '63319d80feb9f483ee823ac5',
    };
    sinon.stub(Model, 'create').resolves(carOutput);
    // Act
    const carService = new CarService();
    const result = await carService.create(carInput);
    // Assert
    expect(result).to.be.deep.equal(new Car(carOutput));
    sinon.restore();
  });
});