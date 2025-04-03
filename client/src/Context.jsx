import { createContext, useContext, useState } from "react";

const TitleContext = createContext()

export const useTitleContext = ()=> useContext(TitleContext)

export const TitleProvider = ({children})=>{

const [titleText, setTitleText] = useState("tittel i context")


    return (
        <TitleContext.Provider
        value={{titleText, setTitleText}}
        >
            {children}
        </TitleContext.Provider>
    )

}