import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import "./Form.css"

function Form() {
    return (
        <Box
        component="form"
        autoComplete="off"
        >
            <div className="form">
                <h2>Subscribite a nuestro Newsletter</h2>

                <div className="datos-container">
                    <TextField className="datos"
                    variant="standard" 
                    placeholder="Nombre" 
                    margin="normal"
                    color="secondary"/>

                    <TextField className="datos"
                    variant="standard"
                    placeholder="Correo electrónico" 
                    margin="normal"
                    color="secondary"/>

                    <button type="submit">Enviar</button>

                </div>
            </div>
        </Box>
    )
}

export default Form;