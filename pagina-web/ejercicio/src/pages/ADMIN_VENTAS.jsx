import 'src/styles/styles.css';
import { Link } from 'react-router-dom';

function ADMIN_VENTAS() {
    return(
        <div className="App">
            <header>
                <figure className ="logo">
                    <Link to ='/'>
                        <img src="logo.png" width="120px" height="120px"/>
                    </Link>
                </figure>
                <div className = "titulo admin">
                    <p> <h1> ADMINISTRADOR DE VENTAS</h1></p>
                </div>
            </header>
            <section className = "consulta">
                <div>
                </div>
            </section>
            <aside className = "lateral" >
                <input type="text" name = "input buscar"id = "inputadmin"/>
                <button name = "buscar" id = "idbuscar">Buscar</button>
            </aside>
        </div>
    )
}

export default ADMIN_VENTAS;