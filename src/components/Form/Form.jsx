import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import "./Form.css"

function Form() {
    return (
        <Box
        component="form"
        autoComplete="off"
        sx={{
            position: 'relative',
            top: '100px',
            marginBottom: '120px',
            display: 'flex',
            justifyContent: 'space-between',
        }}  
        >
                <h3>Subscribe to our Newsletter</h3>

                <div className="data-container">
                    <TextField className="data"
                    label= "Name"
                    variant="standard" 
                    margin="normal"
                    color="primary"/>

                    <TextField className="data"
                    label="Email address"
                    variant="standard"
                    margin="normal"
                    color="primary"/>

                    <button type="submit">Subscribe</button>

                </div>
           
        </Box>
    )
}

export default Form;