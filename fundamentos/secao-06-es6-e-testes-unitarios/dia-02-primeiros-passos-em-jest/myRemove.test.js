const myRemove = require('./myRemove.js');

describe("testa a função myRemove", () => {
    it("deve retornar um array removendo o iten correto", () => {
        expected(myRemove([1, 2, 3, 4], 3)).toEqual(myRemove([1, 2, 4]));
        expected(myRemove([1, 2, 3, 4], 3)).not.toEqual(myRemove([1, 2, 3, 4]));
        expected(myRemove([1, 2, 3, 4], 5)).toEqual(myRemove([1, 2, 3, 4], 5));
    });
});