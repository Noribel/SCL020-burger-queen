import React from 'react'
import LogoutIcon from '@mui/icons-material/Logout';
import { auth, collection, db, signOut, where, onSnapshot, query } from '../Firebase/config';
import { useHistory } from 'react-router-dom';
import { Button, Grid } from '@mui/material';
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const VistaChef = () => {

    const history = useHistory()

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

    const [orders, setOrders] = React.useState([])
    console.log("Camila", orders)
    const [orderdone, setOrderDone] = React.useState([])
    const [delivery, setDelivery] = React.useState([])
    const papitas = true;

    React.useEffect(() => {
        if (papitas === true) {

            const snapshot = (callback) => {
                const lookOrders = query(collection(db, "Pedidos"), where('estado', '==', 'en preparación'));
                onSnapshot(lookOrders, callback);
            }
            snapshot((item) => {
                const pedidos = item.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))
                console.log(pedidos)
                setOrders(pedidos)
            })
        }
    }, [papitas])

    const bull = (
        <Box
            component="span"
            sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
        >
            •
        </Box>
    );

    return (
        <div style={{ background: "#98C2B1", height: "100%" }}>
            <img src="https://github.com/Noribel/SCL020-burger-queen/blob/main/src/imagenes/logo.png?raw=true"
                className="mt-5 rounded-pill"
                alt=""
                style={{ height: "20%", width: "20%" }}
            ></img>
            <button style={{ background: "#A91313", border: "#A91313" }}>
                <LogoutIcon
                    onClick={() => handleLogOut()}
                    style={{ color: "#98C2B1" }}
                />
            </button>
            <Grid container spacing={2} marginTop="10px">
                {orders.map((item, index) => {
                    return (
                        <Card sx={{ minWidth: 210 }} key={index} style={{ background: "#A91313", color: "white", margin: "5px" }}>
                            <Typography sx={{ fontSize: 14 }} color="white" gutterBottom marginTop="10px">
                                Hora del pedido {bull}
                            </Typography>
                            <Typography variant="h5" component="div">
                                Mesa {bull}{" " + item.mesa}
                            </Typography>
                            {item.orden.map((item, index) => {
                                return (
                                    <CardContent key={index}>
                                        <Typography sx={{ mb: 1.5 }} color="white">
                                            {item.countProducto} {item.nombreProducto}
                                        </Typography>
                                    </CardContent>
                                )
                            })}
                            <CardActions>
                                <Button size="small" variant="contained" style={{ background: "#98C2B1", color: "#A91313", fontWeight: "bold", marginLeft: "10px" }}>
                                    Cancelar
                                </Button>
                                <Button size="small" variant="contained" style={{ background: "white", color: "#A91313", fontWeight: "bold" }}>
                                    Servir
                                </Button>
                            </CardActions>
                        </Card>
                    )
                })}

            </Grid>

        </div>
    )
}

export default VistaChef