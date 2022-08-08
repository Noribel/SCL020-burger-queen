import React, { useCallback } from 'react'
import { useHistory } from "react-router-dom";
import { auth, signInWithEmailAndPassword } from '../Firebase/config';



const LogIn = () => {

  const [password,setPassword] = React.useState("")
  const [email, setEmail] = React.useState("")
  
  const history = useHistory();

const handleLogin = e =>{
  e.preventDefault()
  login()
}
const login = useCallback(async () =>{
    try{
      const resp =  await signInWithEmailAndPassword(auth, email, password)
      console.log("domingo",resp)
      history.push("/homeMesero") 
    }catch(error){
      console.log(error.message);
    
    }
  }, [email, password, history])
 

  return (
    <div >
       <img src="https://github.com/Noribel/SCL020-burger-queen/blob/main/src/imagenes/logo.png?raw=true" className="mt-5 rounded-pill w-50" alt=""/>
        <form onSubmit={handleLogin}>
            <p className="mt-5">
                Introduce tu usuario y contraseña para comenzar
            </p>
          <div className='sesion'>
            <input 
            type="email" 
            className="form-logIn bg-indigo-600" 
            placeholder='email' 
            onChange={e => setEmail(e.target.value)}
            />
            <input 
            value={password}
            type="password" 
            className="form-logIn mt-2" 
            placeholder='password'
            onChange={e => setPassword(e.target.value)}
            // onChange={handleChange}
             />  
            <button 
            className="btn-dark mt-2" 
            type="submit"
            >Ingresar</button>  

          </div>
           
           
        </form>
    </div>
  )
}

export default LogIn