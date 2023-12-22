import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PetsIcon from '@mui/icons-material/Pets';
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

function Navbar(){
    return (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" color='primary'>
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 3}}
              >
              <PetsIcon/> <Typography variant='subtitle1'  sx={{ ml: 2}}>LOGO</Typography>
              </IconButton>

              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'search' }}
                />
              </Search>

                <Button sx={{mr: 4, ml: 4, color: 'primary.darker'}}>
                    <Typography variant='subtitle1'>Categorías</Typography>
                </Button>

                <Button sx={{mr: 3, color: 'primary.darker'}}>
                <Typography variant='subtitle1'>Ofertas</Typography>
                </Button>

                <Button sx={{ color: 'primary.darker'}}>
                <Typography variant='subtitle1'>FAQs</Typography>
                </Button>
               
              <Button endIcon={<PersonIcon/>} variant= 'contained'
                sx={{
                    bgcolor:'primary.dark',
                    position:'absolute',
                    left:'90%'}}>
                Login
              </Button>
            </Toolbar>
          </AppBar>
        </Box>
       
    );
}

export default Navbar;