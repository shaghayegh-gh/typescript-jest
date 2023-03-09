import * as mock  from "../src/mock";
import * as randomNumber from "../src/helper/random-number"

afterEach(() => {
  jest.restoreAllMocks();
});

test('generate chance function', () => {
 const spy = jest.spyOn(randomNumber, 'randomNumber').mockReturnValue(3);
 const output = "you have 3 chance!"
  expect(mock.generateChance()).toEqual(output);
  expect(spy).toHaveBeenCalled();
})
