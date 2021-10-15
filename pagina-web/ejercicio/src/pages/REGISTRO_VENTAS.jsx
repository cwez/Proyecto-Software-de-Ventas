import 'src/styles/styles.css';
import React,{useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import Registro from 'src/components/Registro';

const REGISTRO_VENTA = () => {

   const [valor,setValor] = useState(0)
   const [descripcion,setDescripcion] = useState('')
   const [fechaI,setFechaI] = useState('00/00/0000')
   const [fechaF,setFechaF] = useState('00/00/0000')
   const [encargado,setEncargado] = useState('')

useEffect(() => {
    console.log('cambios:')
},[valor, descripcion, fechaI, fechaF,encargado]);

    const enviarDatosAlBackend =() =>{
        console.log(
            'Valor :',valor,
            'Producto: ', descripcion,
            'Fecha Inicial: ', fechaI,
            'Fecha Proxima: ', fechaF,
            'Encargado: ',encargado
        )
    }
    const cambioDeValor =(e) =>{
        setValor(e.target.value)
    }
    const cambioDeDescripcion =(e) =>{
        setDescripcion(e.target.value)
    }
    const cambioDeFechaI =(e) =>{
        setFechaI(e.target.value)
    }
    const cambioDeFechaF =(e) =>{
        setFechaF(e.target.value)
    }
    const cambioDeEncargado =(e) =>{
        setEncargado(e.target.value)
    }
    return(
        <div className="App">
            <header>
                <figure className= 'logo'>
                    <Link to = '/'>
                    <img src="logo.png" width="120px" height="120px" />
                    </Link>
                </figure>
                <div className ='titulo'>
                    <p><h1>REGISTRO</h1></p>
                    <form className = 'registro'action ="">
                        <Registro onChange ={cambioDeValor}texto = 'Valor total de la venta:' tipo = 'number'/>
                        <br/>
                        <Registro onChange ={cambioDeDescripcion}texto = 'Descripción de la venta:' tipo = 'text'/>
                        <br/>
                        <Registro onChange ={cambioDeFechaI}texto = 'Fecha inicial' tipo = 'datetime-local'/>
                        <br/>
                        <Registro onChange ={cambioDeFechaF}texto = 'Fecha futura pago :' tipo = 'datetime-local'/>
                        <br />
                        <Registro onChange ={cambioDeEncargado}texto = 'Encargado :' tipo = 'text'/>
                        <br/>
                        <div className = "sendButton">
                        <button onClick={enviarDatosAlBackend}>Enviar</button>
                        </div>
                    </form>
                </div>
            </header>
        </div>
    )
}

export default REGISTRO_VENTA;