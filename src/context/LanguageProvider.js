import { createContext, useContext, useEffect, useState } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

// No import statement is needed here as it's already imported above

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
