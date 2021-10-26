import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {
    Redirect
} from 'react-router-dom';

function ListarUsuarios(){
    let [loggedUser, setLoggerUser]= useState(
        localStorage. getItem('usuario') ?
        JSON.parse(localStorage. getItem('usuario')):
        null
    );

    let [token, setToken] = useState (true);
    let [usuarios, setUsuarios] = useState ([]);

    
    useEffect (()=>{
        const tokenStorage = localStorage.getItem ('token');
        if(tokenStorage && loggedUser.rol === "Administrador"){
            fetch('http://localhost:8080/usuarios',{
                headers:{
                    'Content-Type':'application/json',
                    token: tokenStorage
                }
            }).catch((err)=>console.error(err))
            .then((response)=>response.json())
            .then((usuarios)=>{
                setUsuarios(usuarios.usuarios);
                console.log(usuarios);
            });
        }else{
            alert('No estás autorizado para esta función');
            setToken(false);
        }
    }, []);

    function actualizarUsuario(e, usuario) {
        // Llamar al servidor
        const tokenStorage = localStorage.getItem('token');
        const rol = e.target.value;
        fetch('http://localhost:8080/actualizarUsuario', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                token: tokenStorage
            },
            body: JSON.stringify({
                email: usuario.email,
                nombres: usuario.nombres,
                apellidos: usuario.apellidos,
                rol: rol
            })
        }).catch((err) => console.error(err))
            .then((response) => response.json())
            .then((usuarios) => {
                alert('El usuario fue actualizado con exito');
            });
    }

    return(
        <div>
            {!token && <Redirect to= '/login'/> }
            <h1>Listar Usuarios</h1>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Rol</th>
                        <th>Accion</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usuarios.map((usuario) =>
                            <tr key={usuario._id}>
                                <td>{usuario._id}</td>
                                <td>{usuario.nombres}</td>
                                <td>{usuario.apellidos}</td>
                                <td>{usuario.rol}</td>
                                <td>
                                    <select onChange={(e) => { actualizarUsuario(e, usuario) }} value={usuario.rol}>
                                        <option value="Administrador">Administrador</option>
                                        <option value="Ventas">Ventas</option>
                                        <option value="Pendiente">Pendiente</option>
                                    </select>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListarUsuarios;