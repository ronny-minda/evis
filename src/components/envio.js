import react from "react";
import Paquete from "../svg/paquete";
import Recogida from "../svg/recogida";
import Disponible from "./disponible";
import Precios from "./precios";

const Envio = () => {
  return (
    <>
      <section className="Envio">
        <div>
          <Recogida />
          <span>Recogida en la acera</span>
        </div>
        <div>
          <Paquete />
          <span>Envío en compras</span>
        </div>
        <div>
          <Precios />
          <span>Precios bajos garantizados</span>
        </div>
        <div>
          <Disponible />
          <span>Disponible para ti 24/7 </span>
        </div>
      </section>
    </>
  );
};

export default Envio;
