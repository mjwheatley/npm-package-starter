import { constants } from '../src/constants';
import { sayHello } from '../src';

describe('index.ts unit tests', () => {
  describe('sayHello()', () => {
    it('should return "Hello World!"', () => {
      expect(sayHello()).toBe(constants.HELLO_WORLD);
    });
  });
});
