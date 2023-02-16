import { Model } from 'mongoose';
import sinon from 'sinon';
import { expect } from 'chai';
import MotorcycleService from '../../../src/Services/MotorcycleService';
import Motorcycle from '../../../src/Domains/Motorcycle';

describe('Deveria criar uma nova motocicleta', function () {
  it('Deveria criar uma motocicleta com SUCESSO', async function () {
    // Arrange
    const motorcycleInput = {
      model: 'Honda Cb 600f Hornet teste',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
    };
    const motorcycleOutput = {
      model: 'Honda Cb 600f Hornet teste',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
      id: '63319d80feb9f483ee823ac5',
    };
    sinon.stub(Model, 'create').resolves(motorcycleOutput);
    // Act
    const motorcycleService = new MotorcycleService();
    const result = await motorcycleService.create(motorcycleInput);
    // Assert
    expect(result).to.be.deep.equal(new Motorcycle(motorcycleOutput));
    sinon.restore();
  });
});