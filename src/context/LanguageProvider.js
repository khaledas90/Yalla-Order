import { createContext, useContext, useEffect, useState } from "react"



const LanguageContext = createContext();
function LanguageProvider({children}) {
    const [language,setLanguage] = useState("en");
    useEffect(()=>{
      setLanguage(localStorage.getItem("i18nextLng"))
    },[])
  return(
    <LanguageContext.Provider value={{language,setLanguage}}>
    {children}
    </LanguageContext.Provider>
  )
}



export function useLanguage (){
    const context = useContext(LanguageContext);

    return context
}

export default LanguageProvider
