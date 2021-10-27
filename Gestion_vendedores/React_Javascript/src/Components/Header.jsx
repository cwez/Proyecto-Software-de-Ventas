import logo from '../Imagenes/logo.png';


const Header = ({children}) => {
return (
    <header>
        <div align="center"><img src={logo} alt="Logo de Abmodel" width="120px" height="120px"/></div>
        <h1 id="Titulo"> {children} </h1>
    </header>
);
}

export default Header;