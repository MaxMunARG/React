import Button from "./Button";
import CartWidget from "./CartWidget";
import "./NavBar.css";

export function NavBar()
{
    return (
        <nav className="navbar">
            <h3>Bienvenidos</h3>
            <boton>Hot Sale</boton>
            <boton>Equipos Armados</boton>
            <boton>Monitores</boton>
            <boton>Placas de Video</boton>
            <CartWidget items={9} />
        </nav>
    );
    
}

