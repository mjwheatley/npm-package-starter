import { constants } from '../../src/constants.js';
import { sayHello } from '../../src/index.js';

describe('index.ts unit tests', () => {
  describe('sayHello()', () => {
    it('should return "Hello World!"', () => {
      expect(sayHello()).toBe(constants.HELLO_WORLD);
    });
  });
});
