import { Button, CardActions, Grid, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';
import { CluthFrenos } from '../core/interface/CluthFrenos';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

type propsData = {
  arrayData: CluthFrenos[]
}

function Tarjeta(props: propsData) {
  const itemData = props.arrayData;
  const [total, setTotal] = useState<number | string>(0);
  const [status, setStatus] = useState<boolean>(false);
  const [validaButton, setvalidaButton] = useState<boolean>(true);
  const [cantidad, setCantidad] = useState<number | string>(0);

  const buy = () => {
    setStatus(true)
  }

  const handleChange = (event: SelectChangeEvent) => {
    setCantidad(event.target.value);
    if (Number(event.target.value) > 0) {
      setvalidaButton(false);
    } else {
      setvalidaButton(true);
    }
    setTotal(Number(event.target.value) * itemData[0].precio)

  };



  const handleClose = () => {
    setCantidad(0);
    setTotal(0);
    setStatus(false);
  };



  return (
    <Grid container sx={{ textAlign: 'center', alignItems: 'center', alignContent: 'center', justifyContent: 'center', padding: '1vh' }}>
       <Card elevation={10}>
        <CardMedia
          component="img"
          height="100"
          width="500"
          image={itemData[0].img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5">
          {itemData[0].nombre}
          </Typography>
        </CardContent>
      <CardActions sx={{justifyContent: 'center'}}>
      <Button variant='contained' color='primary' onClick={buy}>
      <AddShoppingCartIcon/>
      </Button>
      </CardActions>
    </Card>
      <Dialog open={status} onClose={handleClose}>
        <DialogContent>
          <Card sx={{ minWidth: 345}} elevation={10}>
            <CardHeader
              title={itemData[0].nombre}
            />
            <CardMedia
              component="img"
              height="194"
              image={itemData[0].img}
              alt="img"
            />
            <CardContent>
              <Grid sx={{ flexGrow: 1 }} container spacing={2}>
                <Grid item xs={20}>
                  <Typography>precio : $ {itemData[0].precio} MX</Typography>
                </Grid>
                <Grid item xs={20}>
                  <Typography>Disponibles : {itemData[0].cantidad}</Typography>
                </Grid>
                <Grid item xs={20}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Cantidad</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={String(cantidad)}
                      label="Cantidad"
                      onChange={handleChange}
                    >
                      <MenuItem value={0}>Seleccione cantidad</MenuItem>
                      <MenuItem value={1}>1</MenuItem>
                      <MenuItem value={2}>2</MenuItem>
                      <MenuItem value={3}>3</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={20}>
                  <Typography>Total : {Number(total).toFixed(2)}</Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </DialogContent>
        <DialogActions>
          <Button disabled={validaButton} variant='contained' color='primary' onClick={handleClose}>Comprar</Button>
          <Button variant='contained' color='error' onClick={handleClose}>Cancelar</Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
}

export default Tarjeta;