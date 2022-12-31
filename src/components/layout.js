import react from "react";
import Head from "next/head";

import Navbar from "./navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Navbar />
      <main>{children}</main>

      <div className="fondoAnimacion">
        <div className="fondoBola1"></div>
        <div className="fondoBola2"></div>
        <div className="fondoBola3"></div>
      </div>
    </>
  );
};

export default Layout;
