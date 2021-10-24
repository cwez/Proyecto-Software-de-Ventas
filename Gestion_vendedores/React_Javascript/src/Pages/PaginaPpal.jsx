import Botones from '../Components/Botones';
import Header from '../Components/Header';
import {Link} from 'react-router-dom';
import '../Estilos/estilos.css';


function PaginaPrincipal(){
    return (
        <div>
    
            <Header>
                <div>MÓDULO GESTIÓN DE VENDEDores</div>
            </Header>
    
            <div className="botones" >
                <div id='boton1'>
                    <Link to='/registrar'><Botones className='boton_1' texto="Registrar Información Nuevo Vendedor" /></Link> 
                </div>
                <div id="boton2">
                    <Link to='/modificar'><Botones className='boton_2' texto="Modificar información personal nuevo Vendedor"/></Link>
                </div>
                <div id="boton3">
                <Link to='/consultar'><Botones className='boton_3' texto="Consultar información vendedores"/></Link>
                </div>
            </div>
        </div>
    );
}

export default PaginaPrincipal;