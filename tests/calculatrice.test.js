const Calculatrice = require('../src/calculatrice')

describe('Calculatrice 1', () => {
let calc;

beforeEach(() => {
    calc = new Calculatrice();
})

describe('Addition ', () => {
    test('additionne deux nombres positifs', () => {
        expect(calc.additionner(2, 3)).toBe(5);
    });
});


describe('soustraction', () => {
    test('soustrait deux nombres positifs', () => {
        expect(calc.soustraire(5, 3)).toBe(2);
    })
})


 describe('multiplication', () => {
    test('multiplie deux nombres', () => {
        expect(calc.multiplier(2, 3)).toBe(6);
    });
});

describe('division', () => {

    test("Divier deux nombres", () => {
        expect(calc.diviser(6,2)).toBe(3);
    });

    test('lancer une erreur en cas de division par zéro', () => { 
        expect(() => calc.diviser(6, 0).toThrow('Division par zéro impossible'));
     })



}); 
test("lancer une erreur si les arguments ne sont pas de nombres", () => {
expect(() => calc.additionner('a', 3)).toThrow('les parametres doivent etre des nombres');
expect(() => calc.soustraire(null, 3)).toThrow('les parametres doivent etre des nombres');
expect(() => calc.multiplier(undefined, 3)).toThrow('les parametres doivent etre des nombres');
expect(() => calc.diviser([], {})).toThrow('les parametres doivent etre des nombres');
})
})