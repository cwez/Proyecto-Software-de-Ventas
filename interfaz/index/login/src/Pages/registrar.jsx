import '../Estilos/registrar.css';
import logo from '../logo.png';

function Registro() {
    return (
           
<div>

        <div className="LogoSS">
                    <img src={logo} classNameName='logo' alt='logo' id="logo"/>
        </div>
        <div className="registrate">
            <h2>
                Registrate
            </h2>
        </div>
        <div className='Registro'>
            <form action="">
                <div className='interno'>
                <label id="etiqueta_nombre">Nombres: </label><br/>
                <input type="text" id="cuadro_nombre" size="35px" required/><br></br><br/>
                <label id="etiqueta_apellidos">Apellidos: </label><br/>
                <input type="text" id="cuadro_apellido" size="35px" required/><br></br><br/>
                <label for="documentos">Documento de identidad: </label>
                <select id="docs" className="docs1">
                    <option value="Cedula">C.C.</option>
                    <option value="Tarjeta de identidad">T.I.</option>
                    <option value="Pasaporte">Pasaporte</option>
                    <option value="Documento Extranjero">D.E.</option>
                </select><br/>
                <input type="text" size="35px" required/><br></br><br/>
                <label id="fecha">Fecha de Nacimiento: </label>
                <input type="date" required/><br></br><br/>
                <label id="email">Correo electrónico: </label><br/>
                <input type="email" size="35px" required/><br></br><br/>  
                <label id="telefono">Teléfono:  </label><br/>
                <input type="tel" size="35px" max={10} required/><br></br><br/>
                
                
                <div className='boton'>
                    <br></br><button  type='submit' id="boton_enviar">Registrar</button> <br></br>
                </div>
            </div>
            </form>
        </div>
        </div>
    );
}

export default Registro;