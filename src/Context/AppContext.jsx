import React, { useState, createContext } from "react";

export const AppContext = createContext({});

export const AppProvider = ({ children }) => {

    const [breadcrumb, setBreadcrumb] = useState("")


    return <AppContext.Provider value={{
        breadcrumb, setBreadcrumb
    }}>
        {children}
    </AppContext.Provider>
}