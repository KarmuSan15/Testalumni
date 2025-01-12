// Importamos la función isapple del archivo helper
import isapple from '../helper/isapple'

describe("isapple", () => {

    // Primera prueba: Verificamos que la función retorna true si la string es igual a "manzana"
    it("devuelve true si la string es igual a 'manzana'", () => {
        // Llamamos a la función con el valor 'manzana'
        const result = isapple('manzana');
        // Comprobamos que el resultado sea true
        expect(result).toBe(true);
    });

    // Segunda prueba: Verificamos que la función retorna false si la string no es igual a "manzana"
    it("devuelve false si la string no es igual a 'manzana'", () => {
        // Llamamos a la función con el valor 'pera'
        const result = isapple('pera');
        // Comprobamos que el resultado sea false
        expect(result).toBe(false);
    });

    // Tercera prueba: Verificamos que la función siempre devuelve un valor booleano
    it("debe devolver un booleano", () => {
        // Llamamos a la función con cualquier valor
        const result = isapple('pera');
        // Comprobamos que el tipo del resultado sea boolean
        expect(typeof result).toBe("boolean");
    });
});
