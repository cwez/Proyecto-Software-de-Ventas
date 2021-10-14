function Boton(props) {
    return(
      <form method="GET" action={props.link} target="_self">
      <button name = {props.name} id = {props.id}>{props.texto}</button>
      </form>
    )
  }
  
export default Boton;