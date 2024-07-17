<<<<<<< HEAD
import { createContext, useContext, useEffect, useState } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";
=======
import { createContext, useContext, useEffect, useState } from "react"

>>>>>>> e3d39b4ff3c38205a822a617ec011a75bc72a2f1

const LanguageContext = createContext();
function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("ar");
  useEffect(() => {
    setLanguage(localStorage.getItem("i18nextLng"));
  }, []);
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  return context;
}

export default LanguageProvider;
