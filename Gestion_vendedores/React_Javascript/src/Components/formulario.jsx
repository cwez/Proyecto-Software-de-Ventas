import React, {useEffect, useState } from 'react';  // se debe importar de esta manera el useEffect para poderlos usar dentro del componente formulario
import '../Estilos/registrar.css';



const VendedoresBackend = [
    {
        Nombre: 'Carlos Andres',
        Apellidos: 'Suarez Salazar',
        Genero: 'masculino',
        Documento: 123456,
    },
    {
        Nombre: 'Andrea Kate',
        Apellidos: 'Mendez',
        Genero: 'Femenina',
        Documento: 123456,
    },
    {
        Nombre: 'Wilder Enrique',
        Apellidos: 'Ramirez Buitrago',
        Genero: 'masculino',
        Documento: 123456,
    },
    {
        Nombre: 'Carlos Rodolfo',
        Apellidos: 'Suarez Arias',
        Genero: 'masculino',
        Documento: 123456,
    },
]


const Formulario =() => {

    // const   [nombreVendedor, setNombreVendedor] = useState("") // declarar estado => para usar el useState es necessario haberlo importado junto con el useEffect.
    const [vendedores , setVendedores] = useState ([])

    useEffect( ()=>{
        setVendedores(VendedoresBackend);
        },[]);

   // useEffect(() =>{console.log("Hola soy la nueva función");},[]);     //==> esta funcion solo se ejecuta una vez cuando cargue la pagina /  cada que el valor de la variable que está dentro de los corchetes
                                                                        // cambie, va a ejecutar la funcion que se encuentra antes de la coma, "funcionDePrueba"
                                                                        // la funcion se debe declarar antes del useEffect.
                                                                        // useEffect se puede usar para traer la información desde una Base de Datos.

    // useEffect(()=>{console.log("Funcion que se ejecuta cada que cambia el nombre")},[nombreVendedor]);  // esta funcion se ejecuta cada vez que el valor de la variable nombreVendedor cambie.


    /* 
    
    const enviarDatosAlBackend=() =>{     // => esta funcion se encarga de enviar los datos al backend, en el ejemplo imprime en consola
    console.log("El valor de Nombre es: ", nombreVendedor);
    };

    */


    return (
           
        <div className='Formulario'>
            <form action="">
                <div className='interno'>
                <label id="etiqueta_nombre"><b>Nombres: </b></label><br/>
                <input /* onChange={(e) =>{setNombreVendedor(e.target.value);}} */ type="text" id="cuadro_nombre" size="35px" required/><br></br><br/>
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
                    <br></br><button type='button' /* onClick={enviarDatosAlBackend} */ id="boton_enviar">Registrar</button> <br></br>
                </div>
            </div>
            </form>
        </div>
    );
}
   
export default Formulario;