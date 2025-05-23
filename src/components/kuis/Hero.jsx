import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen bg-cover bg-center flex items-center justify-start relative"
      style={{ backgroundImage: "url('../../img/Hero.png')" }}
    >
      {/* Konten Hero */}
      <div className="relative z-10 text-white text-left pl-6 sm:pl-24 max-w-2xl">
        <h1
          className="text-4xl sm:text-5xl font-extrabold mb-4 drop-shadow-lg"
          style={{
            fontFamily: "Montserrat-ExtraBold, Montserrat, sans-serif",
          }}
        >
          Nikmati Lezatnya Cita Rasa Nusantara
        </h1>
        <p className="text-lg sm:text-xl drop-shadow-md">
          <span className="font-bold">Sedap</span> menghadirkan hidangan lokal
          yang autentik dan sehat, siap menemani momen spesial Anda.
        </p>
      </div>
    </section>
  );
};

export default Hero;
