const { describe } = require('node:test');
const myFizzBuzz = require('./myFizzBuzz.js');

describe("testa a função myFizzBuzz", () => {
    it("verifica, se de acordo com o parâmetro recebido, retorna o valor esperado", () => {
        expected(myFizzBuzz(15)).toBe(myFizzBuzz(fizzbuzz));
        expected(myFizzBuzz(3)).toBe(myFizzBuzz(fizz));
        expected(myFizzBuzz(5)).toBe(myFizzBuzz(buzz));
        expected(myFizzBuzz(1)).toBe(myFizzBuzz(1));
        expected(myFizzBuzz(NaN)).toBe(myFizzBuzz(false));
    });
});