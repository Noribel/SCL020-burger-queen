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


const ResumenPedido = (props) => {
const prueba = props.resumen;

const [result, setResult] = React.useState(props.resumen);


const increase = (row) => {
    const array = props.resumen
    const itemSelected = array.find(element => element.idProducto === row.idProducto);
    console.log(itemSelected)
    itemSelected.countProducto = itemSelected.countProducto + 1;
    console.log(itemSelected.countProducto)
    setResult({ ...array, countProducto : itemSelected.countProducto})
 }


  return (
    <div>
        <TableContainer component={Paper}>
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
              <TableCell align="right"><RemoveIcon /></TableCell>
              <TableCell align="center">{row.countProducto}</TableCell>
              <TableCell align="right"><AddIcon 
                onClick={(e) => increase(row)}/></TableCell>
              <TableCell align="right"><AttachMoneyIcon />{row.precioProducto}</TableCell>
              <TableCell align="right">Por Ejecutar</TableCell>
              <TableCell align="right"><DeleteIcon /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default ResumenPedido