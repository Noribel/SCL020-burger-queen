import React from 'react'
import TableBarIcon from '@mui/icons-material/TableBar';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import { useHistory } from 'react-router-dom';

const VistaMesero = () => {
  const history = useHistory();
  const handleNext = () =>{
    history.push("/Pedidos")
  }
  return (
    <div style={{background: "#98C2B1", height: "100%"}}>
        <img src="https://github.com/Noribel/SCL020-burger-queen/blob/main/src/imagenes/logo.png?raw=true" className="mt-5 rounded-pill w-10" alt=""></img>
        <Grid container spacing={2}>
  <Grid item xs={6}>
  <Button
   variant='contained'
   style={{background: "#A91313", color: "white", width: "500px", height: "300px"}}
   onClick={handleNext}
   >Mesa 1</Button>
  </Grid>
  <Grid item xs={6}>
  <Button
  variant='contained'
  style={{background: "A91313"}}>Mesa 2</Button>
  </Grid>
  <Grid item xs={6}>
  <Button
  variant='contained'
  style={{background: "A91313"}}>Mesa 3</Button>
  </Grid>
  <Grid item xs={6}>
  <Button
  variant='contained'
  style={{background: "A91313"}}>Mesa 4</Button>
  </Grid>
  <Grid item xs={6}>
  <Button
  variant='contained'
  style={{background: "A91313"}}>Mesa 5</Button>
  </Grid>
  <Grid item xs={6}>
  <Button
  variant='contained'
  style={{background: "A91313"}}>Mesa 6</Button>
  </Grid>
</Grid>
    </div>
  )
}

export default VistaMesero