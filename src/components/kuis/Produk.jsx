import React, { useEffect, useState } from "react";

const Produk = () => {
  const [produkList, setProdukList] = useState([]);

  useEffect(() => {
    fetch("/data/produk.json")
      .then((res) => res.json())
      .then((data) => setProdukList(data))
      .catch((err) => console.error("Gagal memuat produk:", err));
  }, []);

  return (
    <section
      id="produk"
      className="min-h-screen bg-gray-100 flex flex-col items-center justify-start pt-24 px-6 sm:px-12"
    >
      <div className="max-w-6xl w-full mb-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="md:w-1/2">
          <h2
            className="text-3xl sm:text-4xl font-extrabold mb-4 drop-shadow-lg"
            style={{
              fontFamily: "Montserrat-ExtraBold, Montserrat, sans-serif",
            }}
          >
            Our Top Products
          </h2>
          <p className="text-lg text-gray-600 drop-shadow-sm">
            <strong>Sedap</strong> menyediakan berbagai makanan khas daerah dari seluruh
            penjuru Indonesia. Dari Sabang hingga Merauke, kami hadirkan
            kelezatan nusantara dalam bentuk siap saji yang praktis, sehat,
            dan tetap kaya rasa autentik.
          </p>
        </div>

        <button
          className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-full shadow-md transition duration-300"
          type="button"
        >
          View All
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full">
        {produkList.map(({ id, name, description, price, image }) => (
          <div key={id} className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img src={image} alt={name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-xl mb-2">{name}</h3>
              <p className="text-gray-600 text-sm">{description}</p>
              <p className="text-red-600 font-bold mt-2">{price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Produk;
