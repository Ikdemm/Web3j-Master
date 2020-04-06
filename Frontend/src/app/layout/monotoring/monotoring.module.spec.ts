import { MonotoringModule } from './monotoring.module';

describe('MonotoringModule', () => {
  let monotoringModule: MonotoringModule;

  beforeEach(() => {
    monotoringModule = new MonotoringModule();
  });

  it('should create an instance', () => {
    expect(monotoringModule).toBeTruthy();
  });
});
