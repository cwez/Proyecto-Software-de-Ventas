import 'src/styles/styles.css';
import { Link } from 'react-router-dom';

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
                        <label>Valor total de la venta:</label>
                        <input type="number"/>
                        <br/>
                        <br/>
                        <label>Descripción de la venta:</label>
                        <input type="text"/>
                        <br/>
                        <br/>
                        <label>Fecha inicial :</label>
                        <input type="datetime-local"/>
                        <br/>
                        <br/>
                        <label>Fecha futura pago :</label>
                        <input type="datetime-local"/>
                        <br />
                        <br />
                        <label>Encargado :</label>
                        <input type="text"/>
                        <br/>
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