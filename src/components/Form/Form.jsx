import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import "./Form.css"

function Form() {
    return (
        <Box
        component="form"
        autoComplete="off">

            <h2>Subscribite a nuestro Newsletter</h2>

            <div className="datos-container">
                <TextField className="datos"
                variant="standard" 
                placeholder="Nombre" 
                margin="normal"/>

                <TextField className="datos"
                variant="standard"
                placeholder="Correo electrónico" 
                margin="normal"/>

                <button type="submit">Enviar</button>

            </div>
        </Box>
    )
}

export default Form;