// Importamos las funciones necesarias de la librería React Testing Library
import { render, screen } from "@testing-library/react";
// Importamos el componente a probar
import TextBox2 from "../components/TextBox2";
// Importamos la librería para simular interacciones de usuario
import userEvent from "@testing-library/user-event";

describe('TextBox2 componente', () => {

    // Variables para los elementos que vamos a utilizar en las pruebas
    let box;
    let button;

    // beforeEach se ejecuta antes de cada prueba para configurar el entorno
    beforeEach(() => {
        // Renderizamos el componente TextBox2 en un entorno de prueba
        render(<TextBox2 />);
        
        // Asignamos los elementos que vamos a utilizar en las pruebas
        // Usamos el role personalizado "caja" y el nombre "es una caja"
        box = screen.getByRole('caja', { name: 'es una caja' });
        button = screen.getByRole('button', { name: 'Pulsa para modificar el color del texto' });
    });

    // Primera prueba: Verificamos si la caja de texto se encuentra en el documento
    it('la caja de texto se encuentra en el documento', () => {
        // Comprobamos que el elemento 'box' esté en el documento
        expect(box).toBeInTheDocument();
    });
    
    // Segunda prueba: Verificamos si el botón se encuentra en el documento
    it('El botón se encuentra en el documento', () => {
        // Comprobamos que el botón esté en el documento
        expect(button).toBeInTheDocument();
    });

    // Tercera prueba (comentada): Verificamos si la caja tiene un color de texto inicial
    /*it('la caja con el texto tiene un color inicial', () => {
        // Comprobamos que la caja tenga el color de texto 'rgb(255,192,203)'
        expect(box).toHaveStyle({
            color: 'rgb(255,192,203)'
        });
    });*/
        
    // Cuarta prueba: Verificamos si el color del texto cambia al hacer clic en el botón
    it('comprobar si al pulsar el botón cambia el color del texto', async () => {
        // Creamos una instancia de userEvent para simular interacciones del usuario
        const user = userEvent.setup();
        
        // Simulamos un clic en el botón
        await user.click(button);
        
        // Comprobamos que el color del texto cambió al hacer clic en el botón
        expect(box).toHaveStyle({
            color: 'rgb(0,0,0)'  // Aquí revisamos que el color haya cambiado al negro
        });
    });
});
