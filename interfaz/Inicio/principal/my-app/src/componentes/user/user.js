import React, {useState, useEffect} from "react";

function Usuario() {
    // Creas el objeto usuario para que React pueda actualizarlo en el ciclo de vida
    let [usuario, setUsuario] = useState({});

    // Esta funcion llama al servidor para saber cual es el usuario
    useEffect(()=>{
        fetch('urlDelServidor/usuario')
        .then((json)=>json.json())
        .then((response)=>{
            setUsuario(response.usuario);
        })
    }, []);

    // Esta funcion tiene un renderizado condicional por eso la dejo aca
    function renderUser() {
        // Valida que exista la información del usuario, si la longitud es 0 significa que no hay ningun usuario
        if(Object.keys(usuario).length > 0) {
            return (
                <div>
                    <ul>
                        <li><span>Nombre: </span>{usuario.nombres}</li>
                        <li><span>Apellidos: </span>{usuario.apellidos}</li>
                        <li><span>E-mail: </span>{usuario.email}</li>
                        <li><span>Rol: </span>{usuario.rol}</li>
                    </ul>
                </div>
            );
        } else {
            // No hay ningun usuario entonces le decimos a react que renderice esto
            return (
                <div>
                    <h1>Ocurrió un error al cargar al usuario</h1>
                </div>
            );
        }
    }
    return (
        <div>
            {
                renderUser()
            }
        </div>
    )
}

export default Usuario;
