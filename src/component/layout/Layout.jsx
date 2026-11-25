// src/components/layout/Layout.jsx
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SEO from "./SEO";

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <>
      <SEO />
      <Navbar />
      <main className=" ">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}