import React from 'react'
import "./LanguageMenu.css";
import { useLanguage } from '../../context/LanguageProvider';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    fallbackLng: "en",
    detection:{
        order: ['cookie', 'localStorage', 'sessionStorage', 'navigator','htmlTag','path', 'subdomain'],
        caches:["cookie","localStorage"],
    },
    backend:{
        loadPath: '/locale/{{lng}}/translation.json',
    }

  });
function LanguageMenu() {
    const {language,setLanguage} = useLanguage()
    function chanageToEn(){
        setLanguage("en");
        i18n.changeLanguage("en")
       window.location.reload()
    }
    function chanageToAr(){
        setLanguage("ar");
        i18n.changeLanguage("ar")
        window.location.reload()
    }
  return (
    <ul className='langList'>
      <li><button  onClick={chanageToEn} className={`en ${language === "en" ? "active" : ""}`}>English</button></li>
      <li><button onClick={chanageToAr} className={`ar ${language === "ar" ? "active" : ""}`}>عربى</button></li>
    </ul>
  )
}

export default LanguageMenu
