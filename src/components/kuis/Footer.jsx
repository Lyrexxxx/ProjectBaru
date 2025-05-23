import React from "react";
import holyWings from "/src/assets/images/Holy Wings Indonesia.png";
import {
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Contact Us - kiri */}
        <div className="order-1 md:order-1">
          <h4 className="text-lg font-bold mb-2">Contact Us</h4>
          <p>Email : support@sedap.com</p>
          <p>Call Center : 021-78655495</p>
        </div>

        {/* Sosial Media - tengah */}
        <div className="order-3 md:order-2">
          <h4 className="text-lg font-bold mb-2 text-center">Social Media</h4>
          <div className="flex items-center justify-center gap-4 text-xl">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="hover:text-pink-500 transition duration-300" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="hover:text-blue-400 transition duration-300" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="hover:text-blue-600 transition duration-300" />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
              <FaTiktok className="hover:text-white transition duration-300" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="hover:text-red-500 transition duration-300" />
            </a>
          </div>
        </div>

        {/* Partner - kanan */}
        <div className="order-2 md:order-3">
          <h4 className="text-lg font-bold mb-2">Partner</h4>
          <img
            src={holyWings}
            alt="Holy Wings Indonesia"
            className="w-24 mt-2"
          />
        </div>
      </div>

      <p className="text-center mt-6 text-sm">© 2025 Sedap. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
