import React from "react";
import { useTranslation } from "react-i18next";
import Logo from "../assets/img/Link.svg";

function Navbar() {
  let { t, i18n } = useTranslation();

  function changeLanguage(lang) {
    console.log(lang);
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  }
  return (
    <section className=" bg-white/50   fixed right-0 left-0 backdrop-blur-md">
      <nav className="flex container justify-between items-center py-3.5">
        <a href="#">
          <img src={Logo} alt="logo" />
        </a>
        <div className="flex gap-5 color-[#6B7280] text-4">
          <a href="#">{t("navbar.features")}</a>
          <a href="#">{t("navbar.contact")}</a>
        </div>
        <div className="p-1 rounded-2xl bg-[#F3F4F6] flex gap-1">
          <button
            onClick={() => changeLanguage("uz")}
            className={`py-2.5 px-3 rounded-2xl cursor-pointer transition ${i18n.language === "uz" ? "bg-[#6467F2] text-white" : "text-black"}`}
          >
            UZ
          </button>
          <button
            onClick={() => changeLanguage("en")}
            className={`py-2.5 px-3 rounded-2xl cursor-pointer transition ${i18n.language === "en" ? "bg-[#6467F2] text-white" : "text-black"}`}
          >
            EN
          </button>
        </div>
      </nav>
    </section>
  );
}

export default Navbar;
