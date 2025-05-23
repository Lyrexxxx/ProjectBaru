import React from "react";
import Header from "../components/kuis/Header";
import Footer from "../components/kuis/Footer";
import { Outlet } from "react-router-dom";

const GuestLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default GuestLayout;
