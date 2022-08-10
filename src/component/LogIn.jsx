import React, { useCallback } from 'react'
import { useHistory } from "react-router-dom";
import { auth, signInWithEmailAndPassword } from '../Firebase/config';

const LogIn = () => {

  const [password, setPassword] = React.useState("")
  const [email, setEmail] = React.useState("")

  const history = useHistory();

  const handleLogin = e => {
    e.preventDefault()
    login()
  }
  const login = useCallback(async () => {
    try {
      const resp = await signInWithEmailAndPassword(auth, email, password)
      console.log("domingo", resp)

        if (resp.user.email === "clearca57@gmail.com"){
          history.push("/homeMesero") 
        } else if (resp.user.email === "rivero.noribel@gmail.com"){
          history.push("/homeChef")
        }
    } catch (error) {
      alert("Usuario o contraseña no validos")
      console.log(error.message);

    }
  }, [email, password, history])


  return (
    <div style={{ background: "#98C2B1", height: "100%" }}>
      <img src="https://github.com/Noribel/SCL020-burger-queen/blob/main/src/imagenes/logo.png?raw=true"
        className="mt-5 rounded-pill"
        alt=""
        style={{ height: "30%", width: "30%" }}
      />
      <form onSubmit={handleLogin}>
        <p className="mt-5">
          Introduce tu usuario y contraseña para comenzar
        </p>
        <div className='sesion'>
          <input
            type="email"
            className="form-logIn bg-indigo-600"
            placeholder='email'
            style={{ background: "#AD4C4C", color: "white" }}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            value={password}
            type="password"
            className="form-logIn mt-2"
            placeholder='password'
            style={{ background: "#AD4C4C", color: "white" }}
            onChange={e => setPassword(e.target.value)}
          // onChange={handleChange}
          />
          <button
            className="btn-dark mt-2"
            type="submit"
            style={{ background: "#A91313", color: "white" }}
          >Ingresar</button>

        </div>


      </form>
    </div>
  )
}

export default LogIn