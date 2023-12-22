import { Grid } from "@mui/material";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Box } from "@mui/system";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

function Featured() {
    return (
        <Box>
            <div>
                <h2>Productos destacados</h2>

                <Grid container gap={12} position="static" justifyContent="center"
                    sx={{
                        position: 'relative',
                        top: "20px"}}>
                    <Item>
                        <img src="/src/assets/img/churrasquito.jpg"/>
                        <h4>Producto 1</h4>
                        <p>Precio</p>
                    </Item>

                    <Item>
                        <img src="/src/assets/img/Huesito.jpg"/>
                        <h4>Producto 2</h4>
                        <p>Precio</p>
                    </Item>

                    <Item>
                        <img src="/src/assets/img/comedero.jpg"/>
                        <h4>Producto 3</h4>
                        <p>Precio</p>
                    </Item>
                </Grid>
            </div>
        </Box>
    )
}

export default Featured;