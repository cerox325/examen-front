import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navbar = () => {
    return (
        <>
            <Box sx={{ flexGrow: 1, color: 'white', paddingBottom: '3vh'}}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'auto', sm: 'block' }}}
                        >
                            CLUTH Y FRENOS CARRASCO
                        </Typography>
                        <Typography
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'auto', sm: 'block' }}}
                        >
                        </Typography>
                        <ShoppingCartIcon/>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );
};

export default Navbar;