import { useEffect } from "react";






const Tabla=({ listaVendedores }) => {

    useEffect(()=>{
        console.log("este es el listado de vendedores: ", listaVendedores);
    }, [listaVendedores]);

    

    return(

        <div className='tablaVendedores'>
            <h2>VENDEDORES ACTUALES</h2>
        <div id="tablita">
        <table>
            <thead>
                <tr>
                    <th>Nombres</th>
                    <th>Apellidos</th>
                    <th>Género</th>
                    <th>Documento Identidad</th>
                    <th>Fecha Nacimiento</th>
                    <th>Correo Electrónico</th>
                    <th>Teléfono</th>
                    <th>Dirección</th>
                    <th>Comentarios</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>dato1</td>
                    <td>dato2</td>
                    <td>dato3</td>
                    <td>dato4</td>
                    <td>dato5</td>
                    <td>dato6</td>
                    <td>dato7</td>
                    <td>dato8</td>
                    <td>dato9</td>
                </tr>
                <tr>
                    <td>dato1</td>
                    <td>dato2</td>
                    <td>dato3</td>
                    <td>dato4</td>
                    <td>dato5</td>
                    <td>dato6</td>
                    <td>dato7</td>
                    <td>dato8</td>
                    <td>dato9</td>
                </tr>
                <tr>
                    <td>dato1</td>
                    <td>dato2</td>
                    <td>dato3</td>
                    <td>dato4</td>
                    <td>dato5</td>
                    <td>dato6</td>
                    <td>dato7</td>
                    <td>dato8</td>
                    <td>dato9</td>
                </tr>
            </tbody>
        </table>
        </div>
        </div>

    );
}

export default Tabla;