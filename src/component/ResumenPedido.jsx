import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { Send } from '@mui/icons-material';
import { collection, db, addDoc } from '../Firebase/config';
import { Button } from '@mui/material';



const ResumenPedido = (props) => {
const nMesa = props.mesa;

const [result, setResult] = React.useState(props.resumen);

const increase = (item) => {
    const array = props.resumen
    const itemSelected = array.find(element => element.idProducto === item.idProducto);
    const cantidad = itemSelected.countProducto ++
    setResult({ ...array, countProducto : cantidad})
 }

 const subtract = (item) => {
    const array = props.resumen
    const itemSelected = array.find(element => element.idProducto === item.idProducto);
    if (itemSelected.countProducto > 1) {
    const cantidad = itemSelected.countProducto -- 
    setResult({ ...array, countProducto : cantidad})
    }
 }

 const remove = (item) => {
    const position = item.id;
    const menu = props.resumen.splice(position, 1)
    setResult(...menu)
 }

 const sendOrden = async (e) => {
    try{ 
        await addDoc(collection(db, 'Pedidos'), {
            estado: "en preparación",
            hora: new Date(),
            mesa: nMesa, 
            orden: props.resumen
        })

    } catch(error){
        console.log(error)
    }
 }


  return (
    <div>
        <TableContainer component={Paper}  style={{ background: "#A91313", color: "white", height: "100%" }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Producto</TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="center">Cantidad</TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right">Precio Unitario</TableCell>
            <TableCell align="right">Precio Total</TableCell>
            <TableCell align="right">Eliminar producto</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.resumen.map((row, i) => (
            <TableRow
              key={i}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.nombreProducto}
              </TableCell>
              <TableCell align="right"><RemoveIcon 
                onClick={(e) => subtract(row)}/></TableCell>
              <TableCell align="center">{row.countProducto}</TableCell>
              <TableCell align="right"><AddIcon 
                onClick={(e) => increase(row)}/></TableCell>
              <TableCell align="right"><AttachMoneyIcon />{row.precioProducto}</TableCell>
              <TableCell align="right">Por Ejecutar</TableCell>
              <TableCell align="right"><DeleteIcon 
                onClick={(e) => remove(row)}/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <Button
            variant='contained'
            style={{ background: "#A91313", color: "white", width: "200px", height: "100px" }}
            onClick={(e) => sendOrden()}>
            Enviar Pedido
          </Button>
    </div>
  )
}

export default ResumenPedido