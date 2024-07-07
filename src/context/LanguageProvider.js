import { createContext, useContext, useState } from "react"


const LanguageContext = createContext();
function LanguageProvider({children}) {
    const [language,setLanguage] = useState('en')
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
