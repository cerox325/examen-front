import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


const Navbar = () => {
    return (
        <>
            <Box sx={{ flexGrow: 1, color: 'white', paddingBottom: '3vh'}}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography
                            variant="h4"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'auto', sm: 'block' } }}
                        >
                            CLUTH Y FRENOS CARRASCO
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );
};

export default Navbar;