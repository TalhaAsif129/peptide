// src/components/layout/Layout.jsx
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SEO from "./SEO";

export default function Layout() {
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