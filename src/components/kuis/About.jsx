import React from "react";
import FoodImage from "/src/assets/images/food.png"; // Pastikan path ini benar

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-white flex flex-col items-center justify-start pt-24 px-6 sm:px-12"
    >
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-6xl w-full">
        {/* Gambar */}
        <div className="w-full md:w-1/2">
          <img
            src={FoodImage}
            alt="Tentang Sedap"
            className="rounded-xl shadow-lg w-full h-auto object-cover"
          />
        </div>

        {/* Teks: Judul + Deskripsi + Tombol */}
        <div className="w-full md:w-1/2 text-gray-800">
          <h2
            className="text-3xl sm:text-4xl font-extrabold mb-4 drop-shadow text-left"
            style={{
              fontFamily: "Montserrat-ExtraBold, Montserrat, sans-serif",
            }}
          >
            About Us
          </h2>
          <p className="text-lg sm:text-xl drop-shadow-md text-justify leading-relaxed mb-6">
            <strong>Sedap</strong> adalah platform makanan sehat yang
            menggabungkan cita rasa lokal dengan sentuhan modern. Kami percaya
            bahwa makanan sehat tak harus membosankan—maka kami hadir dengan
            solusi lezat, bergizi, dan menginspirasi gaya hidup yang lebih baik.
          </p>

          {/* Tombol */}
          <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-full shadow-md transition duration-300">
            Discover More
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
