import React from 'react'
import TableBarIcon from '@mui/icons-material/TableBar';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';

const Pedidos = () => {
    const [productos, setProductos] = React.useState(false)

  const handleDisplay = () =>{
    setProductos(true)
  }  
  return (
    <div>
        <img src="https://github.com/Noribel/SCL020-burger-queen/blob/main/src/imagenes/logo.png?raw=true" className="mt-5 rounded-pill w-10" alt=""></img>
        <Grid container spacing={2}>
  <Grid item xs={6}>
  <Button
  variant='contained'
  style={{background: "#A91313", color: "white", width: "300px", height: "310px"}}
  onClick={handleDisplay}>
    Desayuno
  </Button>
  </Grid>
  <Grid item xs={6}>
  <Button>
    Almuerzo
  </Button>
  </Grid>
</Grid>

{productos === true &&
<Grid container spacing={2}>
<Grid item xs={6}>
  <Button
  variant='contained'
  style={{background: "#A91313", color: "white", width: "100px", height: "50px"}}
  onClick={handleCount}>
   cafe $100
  </Button>
  </Grid>
  <Grid item xs={6}>
  <Button>
    Agua $900
  </Button>
  </Grid>
</Grid>}
    </div>
  )
}

// tengo que hacer el jason con: id, nombre, precio

export default Pedidos