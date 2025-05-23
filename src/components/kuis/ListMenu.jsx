import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function ListMenu({ horizontal }) {
  const [openDropdown, setOpenDropdown] = useState(null);

  const menuClass = ({ isActive }) =>
    `flex cursor-pointer items-center rounded-lg px-5 py-2 text-base font-semibold
    ${
      isActive
        ? "text-red-600 bg-red-100 border border-red-600 shadow-lg"
        : "text-gray-700 bg-white border border-gray-300 hover:text-red-600 hover:border-red-600 hover:shadow-md"
    }
    transition duration-300`;

  const menus = [
    {
      title: "Home",
      to: "/guest#hero",
      submenu: [
        { title: "Home style 1", to: "/home-style-1" },
        { title: "Home style 2", to: "/home-style-2" },
        { title: "Home style 3", to: "/home-style-3" },
      ],
    },
    { title: "Tentang", to: "/guest#about" },
    { title: "Produk", to: "/guest#produk" },
    { title: "Testimoni", to: "/guest#testimoni" },
    { title: "Subscribe", to: "/guest#subscribe" },
  ];

  if (horizontal) {
    return (
      <ul className="flex space-x-6 text-gray-700 font-medium relative">
        {menus.map((menu, idx) => (
          <li key={idx} className="relative">
            {menu.submenu ? (
              <>
                <button
                  onClick={() =>
                    setOpenDropdown(openDropdown === idx ? null : idx)
                  }
                  className={`
                    flex items-center rounded-lg px-5 py-2 space-x-2 text-base font-semibold
                    bg-white
                    border border-gray-300
                    text-gray-700
                    hover:text-red-600 hover:border-red-600 hover:shadow-md
                    focus:outline-none focus:ring-2 focus:ring-red-400
                    transition
                    duration-300
                    ${openDropdown === idx ? "text-red-600 border-red-600 shadow-lg" : ""}
                  `}
                >
                  <span>{menu.title}</span>
                  <svg
                    className={`w-4 h-4 ml-1 mt-0.5 transition-transform ${
                      openDropdown === idx ? "rotate-180 text-red-600" : "text-gray-400"
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                <ul
                  className={`absolute left-0 top-full mt-1 w-48 bg-white rounded-xl shadow-lg z-50 transition-opacity duration-300 ${
                    openDropdown === idx
                      ? "opacity-100 visible"
                      : "opacity-0 invisible pointer-events-none"
                  }`}
                  style={{ minWidth: "12rem" }}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  {menu.submenu.map((sub, i) => (
                    <li key={i}>
                      <NavLink
                        to={sub.to}
                        className={({ isActive }) =>
                          `block px-4 py-2 text-gray-700 font-semibold rounded-lg
                          hover:text-red-600 hover:bg-red-100 transition ${
                            isActive
                              ? "text-red-600 bg-red-100 font-extrabold"
                              : ""
                          }`
                        }
                        onClick={() => setOpenDropdown(null)} // tutup dropdown saat klik submenu
                      >
                        {sub.title}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <HashLink smooth to={menu.to} className={menuClass}>
                {menu.title}
              </HashLink>
            )}
          </li>
        ))}
      </ul>
    );
  }

  // Kalau vertical menu
  return (
    <nav className="mt-10">
      <ul className="space-y-3">
        <li>
          <NavLink to="/" className={menuClass}>
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/orders" className={menuClass}>
            Orders
          </NavLink>
        </li>
        <li>
          <NavLink to="/customers" className={menuClass}>
            Customers
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
