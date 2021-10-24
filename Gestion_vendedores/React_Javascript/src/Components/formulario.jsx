import React from 'react';
import '../Estilos/registrar.css';


const enviarDatosAlBackend = () =>{
    
}


function Formulario() {
    return (
           
        <div className='Formulario'>
            <form action="">
                <div className='interno'>
                <label id="etiqueta_nombre"><b>Nombres: </b></label><br/>
                <input type="text" id="cuadro_nombre" size="35px" required/><br></br><br/>
                <label id="etiqueta_apellidos"><b>Apellidos: </b></label><br/>
                <input type="text" id="cuadro_apellido" size="35px" required/><br></br><br/>
                <label id="etiqueta_doc"><b>Género: </b></label>
                <input id="radio_fem" type="radio" className="genero" value="Mujer"/>
                <label for="radio_fem">Mujer</label>
                <input id="radio_hom" type="radio" className="genero" value="Hombre"/>
                <label for="radio_hom">Hombre</label>
                <input id="radio_otro" type="radio" className="genero" value="Otro"/>
                <label for="radio_otro">Otro</label><br></br><br/>
                <label for="documentos"><b>Documento de identidad: </b></label>
                <select id="docs" className="docs1">
                    <option value="Cedula">C.C.</option>
                    <option value="Tarjeta de identidad">T.I.</option>
                    <option value="Pasaporte">Pasaporte</option>
                    <option value="Documento Extranjero">D.E.</option>
                </select><br/>
                <input type="text" size="35px" required/><br></br><br/>
                <label id="fecha"><b>Fecha de Nacimiento: </b></label>
                <input type="date" required/><br></br><br/>
                <label id="email"><b>Correo electrónico: </b></label><br/>
                <input type="email" size="35px" required/><br></br><br/>  
                <label id="telefono"><b>Teléfono: </b> </label><br/>
                <input type="tel" size="35px" max={10} required/><br></br><br/>
                <label id="direccion"><b>Dirección de Residencia: </b> </label> <br/>
                <input type="text" size="35px" required/><br></br><br/>
                <div id="comentarios"><label><b>Comentarios: </b></label><br/>
                    <textarea rows="9" cols="60"></textarea><br></br>
                </div>
                
                <div className='boton'>
                    <br></br><button onClick={enviarDatosAlBackend} type='submit' id="boton_enviar">Registrar</button> <br></br>
                </div>
            </div>
            </form>
        </div>
    );
}
            
    
   
export default Formulario;