import react, { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "../svg/logo";
import Carrito from "../svg/carrito";
import Perfil from "../svg/perfil";

const Navbar = () => {
  const [animaTienda, setAnimaTienda] = useState("tiendaAnima3");

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("interval en uso");

      setAnimaTienda((animaTienda) => {
        if (animaTienda === "tiendaAnima1") {
          return "tiendaAnima2";
          console.log("tiendaAnima2");
        }
        if (animaTienda === "tiendaAnima2") {
          return "tiendaAnima3";
          console.log("tiendaAnima3");
        }
        if (animaTienda === "tiendaAnima3") {
          return "tiendaAnima1";
          console.log("tiendaAnima1");
        }
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="espacioHeader"></div>
      <nav>
        <Link className="logo" href="/">
          <Logo />
        </Link>

        <div className="conteNav">
          <li>
            <Link className={`Tienda ${animaTienda}`} href="#">
              Tienda
            </Link>
          </li>
          <li>
            <Link href="#">Contáctanos</Link>
          </li>
          <li>
            <Link href="#">
              <Perfil /> <div>Entrar</div>
            </Link>
          </li>
          <li>
            <Link href="#">
              <Carrito />
            </Link>
          </li>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
