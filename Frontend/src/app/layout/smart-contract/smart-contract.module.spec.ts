import { SmartContractModule } from './smart-contract.module';

describe('SmartContractModule', () => {
  let smartContractModule: SmartContractModule;

  beforeEach(() => {
    smartContractModule = new SmartContractModule();
  });

  it('should create an instance', () => {
    expect(smartContractModule).toBeTruthy();
  });
});
