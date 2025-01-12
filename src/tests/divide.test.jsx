// Importamos las funciones necesarias de la librería de pruebas Vitest
import { describe, expect } from 'vitest'
// Importamos la función divide de nuestro archivo helper
import divide from '../helper/divide'

// Definimos un bloque de pruebas para la función divide
describe("divide", () => {

    // Primera prueba: Verificamos que la función retorne un número si ambos parámetros son números
    it("debe retornar un número si se introduce números", () => {
        // Llamamos a la función divide con dos números
        const result = divide(2, 2)
        // Comprobamos que el tipo de resultado sea un número
        expect(typeof result).toBe('number')
    })

    // Segunda prueba: Verificamos que la función retorne null si uno de los parámetros no es un número
    it("debe retornar null si alguno de ellos no son números", () => {
        // Llamamos a la función con un valor no numérico ("hola")
        const result = divide("hola", 2)
        // Comprobamos que el resultado sea null
        expect(result).toBe(null)
    })

    // Tercera prueba: Verificamos que la función retorne null si el divisor es cero
    it("debe retornar null si el divisor es 0", () => {
        // Llamamos a la función con el divisor igual a 0
        const result = divide(2, 0)
        // Comprobamos que el resultado sea null, ya que no se puede dividir por cero
        expect(result).toBe(null)
    })

    // Cuarta prueba: Verificamos que la función haga una división correcta (10 dividido entre 2)
    it("debe retornar el resultado de la division de 10 / 2 = 5", () => {
        // Llamamos a la función con los valores 10 y 2
        const result = divide(10, 2)
        // Comprobamos que el resultado sea 5
        expect(result).toBe(5)
    })

    // Quinta prueba: Verificamos una división con resultado decimal (10 dividido entre 4)
    it("debe retornar el resultado de la division de 10 / 4 = 2.5", () => {
        // Llamamos a la función con los valores 10 y 4
        const result = divide(10, 4)
        // Comprobamos que el resultado sea 2.5
        expect(result).toBe(2.5)
    })
})
