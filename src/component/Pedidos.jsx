import React from 'react'
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import data from '../data.json';
import ResumenPedido from './ResumenPedido';
import { useParams } from 'react-router-dom';

const Pedidos = () => {

  const menu = data
  const {mesa} = useParams()
  console.log(mesa)

  const [productos, setProductos] = React.useState(false)
  const [type, setType] = React.useState('breakfast')
  const [resumen, setResumen] = React.useState([])
  console.log(type);
  // const handleDisplay = (item) => {
  //   setProductos(true)
  //   setType(item)
  // }

  const addProducto = item => {
    const precioProducto = parseInt(item.price);
    const nombreProducto = item.name;
    const idProducto = item.id;
    const countProducto = item.count;
    const typeProducto = item.type; 
    resumen.push({idProducto, nombreProducto, precioProducto, countProducto, typeProducto})
    setResumen([
      ...resumen,
    ]) 
  }

  return (
    <div style={{ background: "#98C2B1", height: "100%" }}>
      <img
        src="https://github.com/Noribel/SCL020-burger-queen/blob/main/src/imagenes/logo.png?raw=true" 
        style={{height:"20%", width:"20%"}}
        className="mt-5 rounded-pill w-10" 
        alt=""
        ></img>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Button
            variant='contained'
            style={{ background: "#A91313", color: "white", width: "200px", height: "100px" }}
            onClick={() => setType('breakfast')}>
            Desayuno
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            variant='contained'
            style={{ background: "#A91313", color: "white", width: "200px", height: "100px" }}
            onClick={() => setType('lunch')}>
            Almuerzo
          </Button>
        </Grid>
      </Grid>

      {menu.filter(item => item.type === type ).map((item, i) => (
                <Button
                variant='contained'
                style={{ background: "#A91313", color: "white", width: "100px", height: "50px" }} 
                onClick={() => addProducto(item)} 
                value={item.price} 
                name={item.name}
                id={item.id}
                key={i}
                >
                {item.name} ${item.price}
                </Button>
              ))}
      <ResumenPedido resumen={resumen} mesa={mesa}/>

    </div>
  )
}

// tengo que hacer el jason con: id, nombre, precio

export default Pedidos