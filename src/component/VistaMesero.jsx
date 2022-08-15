import React from 'react'
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import { useHistory } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import { borderRadius } from '@mui/system';
import { auth, signOut } from '../Firebase/config';

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

  const handleLogOut = e => {
    logOut()
    history.push("/")
  }

  const logOut = () => {
    signOut(auth)
		.then(() => {
			console.log('Adiós');
			// Sign-out successful.
		})
		.catch((error) => {
			alert('aún estás aquí');
			// An error happened.
		});
  }

  const handleOrders = () => {
    history.push("/EstadoPedidos")
  }
  return (
    <div style={{ background: "#98C2B1", height: "100%" }}>
      <img src="https://github.com/Noribel/SCL020-burger-queen/blob/main/src/imagenes/logo.png?raw=true"
        className="mt-5 rounded-pill"
        alt=""
        style={{ height: "20%", width: "20%" }}
      ></img>
      <Grid container>
        <Grid item xs={6}>
          <Button variant='contained' onClick={handleOrders}>
            Estado de Pedidos
          </Button>
        </Grid>
        <Grid item xs={6}>
        <button style={{ background: "#A91313", border: "#A91313" }}>
        <LogoutIcon
          onClick={() => handleLogOut()}
          style={{ color: "#98C2B1" }}
        />
      </button>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        {table.map((item, index) => {
          return (
            <Grid item xs={6} key={index}>
              <Button
                variant='contained'
                style={{ background: "#A91313", color: "white", width: "350px", height: "100px" }}
                onClick={(e) => handleNext(item.nMesa)}
              >{item.nombre}</Button>
            </Grid>)
        })}

      </Grid>
      
    </div>
  )
}

export default VistaMesero