import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import { useEffect } from "react";
import { useLocation } from 'react-router-dom';

export default function Layout() {

    const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Header />

      <Outlet />

      <Footer />
    </>
  );
}
