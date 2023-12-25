const Person = require('./06-person');

describe('Test for Person', () => {
  let person;
  beforeEach(() => {
    person = new Person('Nicolas', 45, 1.7);
  });

  test('Should return down', () => {
    person = new Person('Nicolas', 45, 1.7);
    const imc = person.calcIMC();
    expect(imc).toBe('down');
  });

  test('Should return normal', () => {
    person = new Person('Nicolas', 59, 1.7);
    const imc = person.calcIMC();
    expect(imc).toBe('normal');
  });
});
