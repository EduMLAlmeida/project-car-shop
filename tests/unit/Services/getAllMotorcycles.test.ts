import { Model } from 'mongoose';
import sinon from 'sinon';
import { expect } from 'chai';
import MotorcycleService from '../../../src/Services/MotorcycleService';
import Motorcycle from '../../../src/Domains/Motorcycle';

describe('Deveria listar todas motocicletas', function () {
  it('Deveria listar todas motocicletas com SUCESSO', async function () {
    // Arrange
    
    const motorcyclesOutput = [{
      model: 'Honda Cb 600f Hornet',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
      id: '63319d80feb9f483ee823ac5',
    }, {
      model: 'Yamaha Cb 600f Hornet',
      year: 2020,
      color: 'Blue',
      status: true,
      buyValue: 24.000,
      category: 'Street',
      engineCapacity: 450,
      id: '65239d80hre9f634iu823vf7',
    }];
    sinon.stub(Model, 'find').resolves(motorcyclesOutput);
    // Act
    const carService = new MotorcycleService();
    const result = await carService.getAll();
    // Assert
    expect(result).to.be.deep.equal(
      motorcyclesOutput.map((motorcycle) => new Motorcycle(motorcycle)),
    );
    sinon.restore();
  });
});