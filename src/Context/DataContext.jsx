import { createContext, useContext, useReducer, useState } from "react";
import { dataReducer, initialState } from "../Reducers/DataReducer";

const DataContext=createContext();

export const DataContextProvider=({children})=>{

    // reducer for managing data
    const[dataState,dataDispatch]=useReducer(dataReducer,initialState);

    //state to store the selected cuisine
    const[selectedCuisine,setSelectedCuisine]=useState("")
    
    return(
        <DataContext.Provider value={{dataState,dataDispatch,selectedCuisine,setSelectedCuisine}}>
            {children}
        </DataContext.Provider>
    )
}

export const useDataContext=()=>useContext(DataContext);