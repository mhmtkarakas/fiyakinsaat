import React, { useEffect } from "react";
import "./MainNavbar.css";

import logo from "./../../Utils/logo.jpg";

const MainNavbar = () => {
  // Dropdown'ları hover ile aç/kapat fonksiyonu
  useEffect(() => {
    const dropdowns = document.querySelectorAll(".nav-item.dropdown");

    dropdowns.forEach((dropdown) => {
      // Tıklama olaylarını kaldır
      const toggleLink = dropdown.querySelector(".nav-link");
      toggleLink.removeAttribute("data-toggle");
      toggleLink.removeAttribute("data-bs-toggle");

      // Hover olaylarını ekle
      dropdown.addEventListener("mouseenter", () => {
        const menu = dropdown.querySelector(".dropdown-menu");
        menu.classList.add("show");
      });

      dropdown.addEventListener("mouseleave", () => {
        const menu = dropdown.querySelector(".dropdown-menu");
        menu.classList.remove("show");
      });
    });
  }, []);

  return (
    <div className="main-navbar">
      <nav className="navbar navbar-expand-lg navbar-dark w-100">
        <div className="container-fluid">
          <a className="navbar-brand me-auto" href="#">
            <img src={logo} alt="Logo" className="d-inline-block align-top" />
            Fiyak Insaat
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Anasayfa
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="kurumsalDropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Kurumsal
                </a>
                <div className="dropdown-menu" aria-labelledby="kurumsalDropdown">
                  <a className="dropdown-item" href="#">
                    Hakkımızda
                  </a>
                  <a className="dropdown-item" href="#">
                    Referanslarımız
                  </a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="projelerDropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Projeler
                </a>
                <div className="dropdown-menu" aria-labelledby="projelerDropdown">
                  <a className="dropdown-item" href="#">
                    Tamamlanan Projeler
                  </a>
                  <a className="dropdown-item" href="#">
                    Devam Eden Projeler
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  İletişim
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MainNavbar;
