import Botones from "../Components/Botones";

function PaginaPrincipal(){
    return (
        <div className="App" >
    
    <div align="center"><image src="logo.png" alt="Logo de Abmodel" width="120px" height="120px"/></div>
    
    <p><h1 id="Titulo"> GESTIÓN DE VENDEDORES </h1></p>
    
    <div className="botones" >
    
        <Botones name="Administracion" texto="Registrar Información Nuevo Vendedor"/>
        <Botones name="Administracion" texto="Modificar información personal nuevo Vendedor"/>
        <Botones name="Administracion" texto="Consultar informacion vendedores"/>
        


    
    </div>
    


</div>
    );
}

export default PaginaPrincipal;