import React, { useEffect, useState } from "react";

const Testimoni = () => {
  const [testimoniList, setTestimoniList] = useState([]);

  useEffect(() => {
    fetch("/data/testimoni.json")
      .then((res) => res.json())
      .then((data) => setTestimoniList(data))
      .catch((err) => console.error("Gagal memuat testimoni:", err));
  }, []);

  return (
    <section id="testimoni" className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2
          className="text-4xl font-extrabold mb-4 text-center text-red-600"
          style={{
            fontFamily: "Montserrat-ExtraBold, Montserrat, sans-serif",
          }}
        >
          What they say ?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {testimoniList.map((user, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <img
                src={user.avatar}
                alt={user.nama}
                className="w-16 h-16 mx-auto mb-4 rounded-full object-cover border-2 border-red-500"
              />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {user.nama}
              </h3>
              <p className="text-gray-600 italic">"{user.ulasan}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimoni;
