import Asesor from "../components/asesor";
import Envio from "../components/envio";
import Layout from "../components/layout";

export default function Home() {
  return (
    <>
      <Layout>
        <Envio />
        <Asesor />
      </Layout>
    </>
  );
}
