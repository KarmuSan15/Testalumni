import { useState } from "react";
import { Box, Button } from "@mui/material";


function TextBox() {
    const [bgColor, setBgColor] = useState('rgb(255,255,0)');
       
    return( 
        <div>
            <Box
                role = 'caja' 
                title='es una caja'
                style={{ backgroundColor: bgColor}}
            >
               Hola mundo, cómo vamos.
            </Box>
            <Button 
                variant = 'outlined' 
                onClick={() => setBgColor(bgColor === 'rgb(255,255,0)' ? 'rgb(255,0,0)': 'rgb(255,255,0)')}
            > 
                Pulsa para modificar el color
            </Button>
        </div>
    )
}
export default TextBox;