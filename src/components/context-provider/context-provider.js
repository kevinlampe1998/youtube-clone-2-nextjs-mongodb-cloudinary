'use client';

import { useReducer, useEffect } from "react";
import { createContext } from "react";

const reducer = (state, action) => {

    return state;
};

export const Context = createContext();

const ContextProvider = ({ children }) => {
    const [ clientDB, dispatch ] = useReducer(reducer, {
        user: null
    });

    return (
        <Context.Provider value={{ clientDB, dispatch }}>
            { children }
        </Context.Provider>
    );
};

export default ContextProvider;