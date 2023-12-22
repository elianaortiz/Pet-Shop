import styled from "@emotion/styled";
import { Paper } from "@mui/material";
import Grid from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.primary,
  }));

export default function Pets() {
    return(
        <Grid
                direction="row">
                <Item>
                    <h3>Dog</h3>
                </Item>
                <Item>
                    <h3>Cat</h3>
                </Item>
                <Item>
                    <h3>Reptile</h3>
                </Item>
                <Item>
                    <h3>Fish</h3>
                </Item>
                <Item>
                    <h3>Small pet</h3>
                </Item>
                <Item>
                    <h3>Bird</h3>
                </Item>
            </Grid>
    )
}