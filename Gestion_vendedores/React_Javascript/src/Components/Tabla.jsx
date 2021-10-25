import '../Estilos/consultar.css';

function Tabla () {
    return(

        <div className='tablaVendedores'>
            <h2>LISTADO DE VENDEDORES ACTUALES</h2>
        <div id="tablita">
        <table>
            <thead>
                <tr>
                    <th>Nombres</th>
                    <th>Apellidos</th>
                    <th>Correo Electrónico</th>
                    <th>Teléfono</th>
                    <th>Dirección</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>dato1</td>
                    <td>dato2</td>
                    <td>dato3</td>
                    <td>dato4</td>
                    <td>dato5</td>
                </tr>
            </tbody>
        </table>
        </div>
        </div>

    );
}

export default Tabla;