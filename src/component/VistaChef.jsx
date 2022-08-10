import React from 'react'
import LogoutIcon from '@mui/icons-material/Logout';
import { auth, signOut } from '../Firebase/config';
import { useHistory } from 'react-router-dom';

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
        </div>
    )
}

export default VistaChef