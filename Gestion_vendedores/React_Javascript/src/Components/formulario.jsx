import './Estilos/Styles.css';
import 'logo.png';




function Formulario() {
    return (
                
            <form action="">
                
                <label id="etiqueta_nombre"><b>Nombres: </b></label><br/>
                <input type="text" id="cuadro_nombre" size="35px" style= "border-radius: 8px;" required/><br></br>
                <label id="etiqueta_apellidos"><b>Apellidos: </b></label></br>
                <input type="text" id="cuadro_apellido" size="35px"style= "border-radius: 8px;"/><br></br>
                <label id="etiqueta_doc"><b>Género: </b></label>
                <input id="radio_fem" type="radio" className="genero" value="Mujer"/>
                <label for="radio_fem">Mujer</label>
                <input id="radio_hom" type="radio" className="genero" value="Hombre"/>
                <label for="radio_hom">Hombre</label>
                <input id="radio_otro" type="radio" className="genero" value="Otro"/>
                <label for="radio_otro">Otro</label><br></br>
                <label for="documentos"><b>Documento de identidad: </b></label>
                <select id="docs" className="docs1">
                    <option value="Cedula">C.C.</option>
                    <option value="Tarjeta de identidad">T.I.</option>
                    <option value="Pasaporte">Pasaporte</option>
                    <option value="Documento Extranjero">D.E.</option>
                </select><br/>
                <input type="text" size="35px"style= "border-radius: 8px;"/><br></br>
                <label id="fecha"><b>Fecha de Nacimiento: </b></label>
                <input type="date"/><br></br>
                <label id="correo"><b>Correo electrónico: </b></label><br/>
                <input type="email" size="35px"style= "border-radius: 8px;"/><br></br>  
                <label id="telefono"><b>Teléfono: </b> </label><br/>
                <input type="tel" size="35px"style= "border-radius: 8px;"/><br></br>
                <label id="direccion"><b>Dirección de Residencia: </b> </label> <br/>
                <input type="text" size="35px"style= "border-radius: 8px;"/><br></br>
                <div id="comentarios"><label><b>Comentarios: </b></label><br/>
                    <textarea rows="9" cols="60" style="border-radius: 8px;"></textarea><br></br>
                </div>
                
                <div className='boton'>
                    <br></br><input id="boton_enviar" type="button" value="Registrar" /><br></br>
                </div>
            </form>
    );
}
            
    
   
export default Formulario;