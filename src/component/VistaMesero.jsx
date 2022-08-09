import React from 'react'
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import { useHistory } from 'react-router-dom';

const table = [
  {
    nMesa: "1",
    nombre: "Mesa 1"
  },
  {
    nMesa: "2",
    nombre: "Mesa 2"
  },
  {
    nMesa: "3",
    nombre: "Mesa 3"
  },
  {
    nMesa: "4",
    nombre: "Mesa 4"
  },
  {
    nMesa: "5",
    nombre: "Mesa 5"
  },
  {
    nMesa: "6",
    nombre: "Mesa 6"
  }
]

const VistaMesero = () => {
  const history = useHistory();

  const handleNext = (mesa) => {
    history.push(`/Pedidos/${mesa}`)
  }
  return (
    <div style={{ background: "#98C2B1", height: "100%" }}>
      <img src="https://github.com/Noribel/SCL020-burger-queen/blob/main/src/imagenes/logo.png?raw=true" className="mt-5 rounded-pill w-10" alt=""></img>
      <Grid container spacing={2}>
        {table.map((item, index) => {
          return (
            <Grid item xs={6} key={index}>
              <Button
                variant='contained'
                style={{ background: "#A91313", color: "white", width: "500px", height: "300px" }}
                onClick={(e) => handleNext(item.nMesa)}
              >{item.nombre}</Button>
            </Grid>)
        })}

      </Grid>
    </div>
  )
}

export default VistaMesero