import styled from "@emotion/styled";
import { Paper } from "@mui/material";
import { Grid } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.primary,
  }));

function Pets() {
    return(
        <Grid container 
            direction="row" 
            gap={4} 
            wrap="no-wrap"
            sx={{
                position: 'relative',
                top: "30px",
                }}>
             <Item>
                <img src="/src/assets/img/dog.jpeg" width="230px"/>
                <h3>Dog</h3>
            </Item>

            <Item>
                <img src="/src/assets/img/cat-10-e1573844975155.jpg" width="230px"/>
                <h3>Cat</h3>
            </Item>

            <Item>
                <img src="/src/assets/img/bird.jpeg" width="230px" height="155px"/>
                <h3>Bird</h3>
            </Item>

            <Item>
                <img src="/src/assets/img/hamster.jpeg" width="230px" height="155px"/>
                <h3>Small pet</h3>
            </Item>

            <Item>
                <img src="/src/assets/img/Fish.jpg" width="230px" height="155px"/>
                <h3>Fish</h3>
            </Item>
               
        </Grid>
       
    )
}

export default Pets;