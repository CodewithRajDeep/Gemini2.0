/* eslint-disable react-refresh/only-export-components */
import { createContext } from "react";
import run from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {
    
    const onSent = async (prompt) => {
        await run(prompt)
    }
    onSent("what is React js")
    const contextValue = {
        
    }

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;