import React, {useState} from 'react';
import './LoginForm.css'
export default function LoginForm(props){

    //Estados 
    const [state, setState] = useState({
        email : "",
        password : "",
    })

    const handleSubmitClick = (e) => {
        e.preventDefault();
        //Comprobar que la contraseña es correcta y el usuario está en la BD
       

        }


    const sendDetailsToServer = () => {


    }

    //Controlar cambio del atributo
    const handleChange = (e) => {
        const {id, value} = e.target
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }

    return(

<div className="card">
    <div className='title'>
        <h3>Inicio de sesión</h3>
    </div>

        <hr/>



    <div>
        <form>
            {/*Correo electrónico*/}
            <div className='inputs'>
                <label>Correo Electrónico</label>
                <input type="email" 
                    id="email"
                   placeholder='Escribe tu correo'
                   value = {state.email}
                   onChange = {handleChange}
                   className='input-box'
                 />
               
            </div>


            {/*Contraseña*/}
        <div className='inputs' >
            <label>Contraseña</label>
            <input type="password"
                    id='password'
                   placeholder='Escribe tu contraseña'
                   value = {state.password}
                   onChange = {handleChange}
                   className='input-box'
            />
        </div>  

        <div className='btn-group'>
        <button 
                type="submit" 
                    className="btn btn-grad"
                    onClick={handleSubmitClick}
                >
                    Confirmar
                </button>
        <span className="login-link">No estoy registrado, <a href="Register">quiero registrarme</a></span>
                </div>


        </form>



    </div>
    </div>
    )
}



