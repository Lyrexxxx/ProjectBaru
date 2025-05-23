import React, { useState } from "react";
import { FaMedal, FaCrown, FaStar, FaTimesCircle } from "react-icons/fa";

const CheckMember = () => {
  const [email, setEmail] = useState("");
  const [member, setMember] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMember(null);

    if (!email.trim()) {
      setError("Email tidak boleh kosong.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Format email tidak valid.");
      return;
    }

    try {
      const response = await fetch("/data/members.json");
      const data = await response.json();
      const found = data.find(
        (m) => m.email.toLowerCase() === email.toLowerCase()
      );

      if (found) {
        setMember(found);
      } else {
        setError("❌ Email tidak terdaftar sebagai member.");
      }
    } catch (err) {
      setError("Gagal memuat data keanggotaan.");
    }
  };

  const renderMemberType = (type) => {
    switch (type) {
      case "silver":
        return (
          <div className="flex items-center gap-2 text-gray-400">
            <FaMedal /> <span>Silver</span>
          </div>
        );
      case "gold":
        return (
          <div className="flex items-center gap-2 text-yellow-500">
            <FaCrown /> <span>Gold</span>
          </div>
        );
      case "platinum":
        return (
          <div className="flex items-center gap-2 text-blue-400">
            <FaStar /> <span>Platinum</span>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 shadow-md rounded-md mt-10">
      <h2
        className="text-4xl font-extrabold mb-4 text-center"
        style={{
          fontFamily: "Montserrat-ExtraBold, Montserrat, sans-serif",
        }}
      >
        Members Checker
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Masukkan Email"
          className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="submit"
          className="bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition duration-300 shadow-md hover:shadow-lg"
        >
          Check it out 
        </button>
      </form>

      {error && (
        <div className="mt-4 text-red-600 text-sm flex items-center gap-2">
          <FaTimesCircle /> <span>{error}</span>
        </div>
      )}

      {member && (
        <div className="mt-6 bg-gray-100 p-4 rounded-md text-center">
          <p className="text-lg font-semibold text-gray-700">
            🧾 Selamat datang,{" "}
            <span className="text-blue-600">{member.nama}</span>!
          </p>
          <div className="mt-2">{renderMemberType(member.tipe_member)}</div>
        </div>
      )}
    </div>
  );
};

export default CheckMember;
