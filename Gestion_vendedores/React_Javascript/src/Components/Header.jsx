import logo from '../Imagenes/logo.png';


const Header = ({children}) => {
return (
    <header>
        <div align="center"><img src={logo} alt="Logo de Abmodel" width="120px" height="120px"/></div>
        <p><h1 id="Titulo"> {children} </h1></p>
    </header>
);
}

export default Header;