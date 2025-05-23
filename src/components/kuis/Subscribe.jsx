import React from "react";

const Subscribe = () => {
  return (
    <section
      id="subscribe"
      className="min-h-screen flex items-center justify-center bg-gray-50 px-6"
    >
      <div className="max-w-3xl w-full bg-white rounded-3xl shadow-lg p-10 text-center">
        <h2
          className="text-4xl font-extrabold mb-4"
          style={{
            fontFamily: "Montserrat-ExtraBold, Montserrat, sans-serif",
          }}
        >
          Subscribe Our Newsletter !
        </h2>
        <p
          className="text-lg text-gray-700 mb-8"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          Dapatkan resep sehat, tips gaya hidup, dan promo eksklusif langsung di Email Anda.
        </p>

        <form className="flex max-w-md mx-auto">
          <input
            type="email"
            placeholder="Masukkan email Anda"
            className="flex-grow py-3 px-5 rounded-l-3xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
            required
          />
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 text-white font-semibold rounded-r-3xl px-6 py-3 transition duration-300"
          >
            Daftar
          </button>
        </form>
      </div>
    </section>
  );
};

export default Subscribe;
