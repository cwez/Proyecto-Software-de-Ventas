import 'src/styles/styles.css';
import Boton from 'src/components/Boton';
import { Link } from 'react-router-dom';

function Pagina_principal(){
    return(
        <div className="App">
      <header>
    <figure className="logo">
        <img src="logo.png"width="120px" height="120px"/>
    </figure>
</header>   
<div className="botones">
<Link to='/administrador_ventas'>
  <Boton texto = 'Administracion de ventas' link = 'ADMIN_VENTAS.html' name ='administracion'
  id = 'idadministracion'/>
</Link>
<br />
<Link to ='/registro_ventas'>
  <Boton texto = 'Registrar venta' link = 'REGISTRO_VENTA.html' name ='registro'
  id = 'idregistro'/>
</Link>
</div>
    </div>
  )
}
export default Pagina_principal;