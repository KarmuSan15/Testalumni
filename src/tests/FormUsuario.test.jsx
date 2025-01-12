// Importamos las funciones necesarias de la librería de pruebas React Testing Library
import { render, screen } from "@testing-library/react";
// Importamos el componente a probar
import FormUsuario from "../components/FormUsuario";
// Importamos la librería para simular eventos del usuario
import userEvent from "@testing-library/user-event";
// Importamos el componente TextField de MUI si lo necesitamos en las pruebas
import { TextField } from "@mui/material";

// Describimos las pruebas para el componente FormUsuario
describe('FormUsuario componente', () => {

    // Variables para los elementos que vamos a utilizar en las pruebas
    let button;
    let tex;
    let cabh2;

    // beforeEach se ejecuta antes de cada prueba. Aquí renderizamos el componente
    beforeEach(() => {
        // Renderizamos el componente FormUsuario
        render(<FormUsuario />);
        // Asignamos los elementos que vamos a utilizar en las pruebas
        button = screen.getByRole('button', { name: 'Submit' });
        tex = screen.getByLabelText("Nombre");
        cabh2 = screen.getByRole("heading", { level: 2 });
    });

    // Primera prueba: Verificamos si el botón está presente en el documento
    it('El botón se encuentra en el documento', () => {
        // Comprobamos que el botón 'Submit' esté en el documento
        expect(button).toBeInTheDocument();
    });

    // Segunda prueba: Verificamos si el campo de texto (TextField) está presente en el documento
    it('El textfield se encuentra en el documento', () => {
        // Comprobamos que el campo de texto "Nombre" esté en el documento
        expect(tex).toBeInTheDocument();
    });

    // Tercera prueba: Verificamos si el encabezado h2 está presente en el documento
    it("prueba renderizado h2", () => {
        // Comprobamos que el encabezado de nivel 2 (h2) esté presente
        expect(cabh2).toBeInTheDocument();
    });

    // Cuarta prueba: Verificamos que al hacer clic en el botón, el campo de texto se borra
    it('comprobar si al pulsar el botón se borra lo escrito en el campo de texto', async () => {
        // Creamos una instancia de userEvent para simular interacciones del usuario
        const user = userEvent.setup();
        
        // Limpiamos el campo de texto antes de empezar
        await user.clear(tex);
        // Escribimos algo en el campo de texto
        await user.type(tex, "Hola");
        // Hacemos clic en el botón 'Submit'
        await user.click(button);
        
        // Comprobamos que el valor del campo de texto esté vacío después de hacer clic
        expect(tex.value).toBe('');
    });
});
