import logo from './logo.svg';
import './styles/styles.css';

function App() {
  return (
    <div className="App">
      <header>
    <figure className="logo">
        <img src="logo.png"width="120px" height="120px"/>
    </figure>
</header>   
<div className="botones">
    <form method="GET" action="ADMIN_VENTAS.html" target="_self">
    <button name = "administracion" id = "idadministracion">Administrador de las ventas</button>
    </form>
    <br/>
    <br/>
    <form method="GET" action="REGISTRO_VENTA.html" target="_self"/>
    <button name = "registro" id = "idregistro">Registrar venta</button>
    <form/>
</div>
    </div>
  );
}
export default App;
