import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import uz from "./locales/uz.json"
import en from "./locales/en.json"


i18next.use(initReactI18next).init({
    resources:{
        uz:{ translation : uz},
        en:{ translation : en},
    },
    lng: localStorage.getItem("lang") || "uz",
    fallbackLng:"uz"
})

export default i18next