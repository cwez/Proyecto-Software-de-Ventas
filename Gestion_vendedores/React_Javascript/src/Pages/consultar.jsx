
import vendedores from 'Components/formulario';
import "../Estilos/consultar.css";
import Tabla from "Components/Tabla";
import Header from "../Components/Header";
import { Link } from "react-router-dom";

const Consultar = () => {
  return (
    <div>
      <Header>
        <div>LISTADO DE VENDEDORES</div>
      </Header>

      <Tabla listaVendedores= {vendedores}></Tabla>
      <div className="boton">
        <br></br>
        <Link to="/registrar">
          <button type="button" id="boton_enviar">
            Agregar vendedor
          </button>
        </Link>
        <br></br>
      </div>
    </div>
  );
};

export default Consultar;
