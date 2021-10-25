import Botones from '../Components/Botones';
import Header from '../Components/Header';
import {Link} from 'react-router-dom';
import '../Estilos/estilos.css';


function Modulos(){
    return (
        <div>
    
            <Header>
                <div>BIENVENIDO A SALESSOFT</div>
            </Header>

            <div className='BotonesModulos'>

            <Link to='/registrar'><Botones className='botonm1' texto="Administracion de ventas" /></Link>
            <Link to='/registrar'><Botones className='botonm2' texto="Administracion de Usuarios" /></Link>
            <Link to='/registrar'><Botones className='botonm3' texto="Administracion de Vendedores" /></Link>
            
            </div>

        </div>
    );
    }

export default Modulos;