/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";
import run from "../config/gemini";

 const Context = createContext();
 export {Context};
const ContextProvider = (props) => {
    
    const [input, setInput] = useState("");

    const [recentPrompt, setRecentPrompt] = useState("");

    const [previousPrompt, setPreviousPrompt] = useState([]);

    const[showResult, setShowResult] = useState(false);
    const[loading, setLoading] = useState(false);
    const[resultData, setResultData] = useState("");
    
    const delayPara = (index, nextWord) => {
          setTimeout( function () {
            setResultData(prev => prev+nextWord);
          },75*index)
    }
    const newChat =  () => {
        setLoading(false);
        setShowResult(false)
    }
    const onSent = async (prompt) => {
        setResultData("");
        setLoading(true);
        setShowResult(true);
        let response="";
        if(prompt !== undefined){
            response = await run(prompt);
            setRecentPrompt(prompt);
           
        }
        else{
            setPreviousPrompt(prev=> [...prev, input])
            setRecentPrompt(input);
            response = await run(input);
        }
        try {
            let responseArray = JSON.parse(response);
            let newResponse = "";

            for(let key in responseArray){
                if( Array.isArray(responseArray[key])) {
                    newResponse += `<b>${key.replace(/_/g, " ")}:</b><br/>`;
                    responseArray[key].forEach((item) => {
                        newResponse += `• ${item}<br/>`;
                    });
                }
                else{
                    newResponse += `<b>${key.replace(/_/g, " ")}:</b><br/>${responseArray[key]}<br/><br/>`;}
                }
                for(let i=0; i< responseArray.length; i++){
                    const nextWord = responseArray[i];
                    delayPara(i, nextWord + "");
                }
                setResultData(newResponse);
            }

         catch (error) {
            console.error("Error parsing response:", error);
            setResultData("Error in processing response.");
        }
        setLoading(false)
        setInput("")

    }
    
    const contextValue = {
        previousPrompt,
        setPreviousPrompt,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput,
        newChat
    }

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;