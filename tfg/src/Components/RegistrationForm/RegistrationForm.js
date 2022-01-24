import React, {useState} from 'react';
import './RegistrationForm.css'
export default function RegistrationForm(props){

    //Estados 
    const [state, setState] = useState({
        email : "",
        password : "",
        confirmPassword : "",
   
    })

    const handleSubmitClick = (e) => {
        e.preventDefault();
        if(state.password === state.confirmPassword){
           console.log(state)
           //Añadir a MongoDB
            sendDetailsToServer()

        }
    else {

            //Modificar para mostrar un mensaje de error
            alert("Las contraseñas no coinciden")
        }    
        
            

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
        <h3>Registro de usuario</h3>
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

            {/*Confirmar contraseña*/}
            <div  className='inputs'>
            <label>Confirmar contraseña</label>
            <input type="password"
                id = "confirmPassword"
                    value = {state.confirmPassword}
                   onChange = {handleChange}
                   className='input-box'
                   placeholder='Escriba su contraseña de nuevo'
            />
        </div>

        <p value = {state.errorMessage} style={{color : "red"}}></p>

        <div className='btn-group'>
        <button 
                type="submit" 
                    className="btn btn-grad"
                    onClick={handleSubmitClick}
                >
                    Registrarse
                </button>
        <span className="login-link">Ya estoy registrado, <a href="www.google.es">quiero iniciar sesión</a></span>
                </div>


        </form>



    </div>
    </div>
    )

}



