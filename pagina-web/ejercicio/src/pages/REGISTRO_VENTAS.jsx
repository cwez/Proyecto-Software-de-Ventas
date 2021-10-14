import 'src/styles/styles.css';
import { Link } from 'react-router-dom';
import Registro from 'src/components/Registro';

function REGISTRO_VENTA() {
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
                        <Registro texto = 'Valor total de la venta:' tipo = 'number'/>
                        <br/>
                        <Registro texto = 'Descripción de la venta:' tipo = 'text'/>
                        <br/>
                        <Registro texto = 'Fecha inicial' tipo = 'datetime-local'/>
                        <br/>
                        <Registro texto = 'Fecha futura pago :' tipo = 'datetime-local'/>
                        <br />
                        <Registro texto = 'Encargado :' tipo = 'text'/>
                        <br/>
                        <div id = "sendButton">
                        <input type="submit" value="Enviar"/>
                        </div>
                    </form>
                </div>
            </header>
        </div>
    )
}

export default REGISTRO_VENTA;