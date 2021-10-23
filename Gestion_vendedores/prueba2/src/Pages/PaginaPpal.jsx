import Botones from '../Components/Botones';
import Header from '../Components/Header';
import {Link} from 'react-router-dom';
import estilos from '../Estilos/estilos.css';


function PaginaPrincipal(){
    return (
        <div>
    
            <Header>
                <div>MÓDULO GESTIÓN DE VENDEDORES</div>
            </Header>
    
            <div className="botones" >
                <div id='boton1'>
                    <Link to='/registrar'><Botones  texto="Registrar Información Nuevo Vendedor" /></Link> 
                </div>
                <div id="boton2">
                    <Link to='/modificar'><Botones texto="Modificar información personal nuevo Vendedor"/></Link>
                </div>
                <div id="boton3">
                <Link to='/consultar'><Botones texto="Consultar informacion vendedores"/></Link>
                </div>
            </div>
        </div>
    );
}

export default PaginaPrincipal;