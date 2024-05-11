import React, { useState, createContext, useEffect } from "react";
import { useParams } from "react-router-dom";

export const AppContext = createContext({});

export const AppProvider = ({ children }) => {

    const params = useParams()

    const [breadcrumb, setBreadcrumb] = useState({
        main: "",
        second: "",
        child: 0,
    })



    return <AppContext.Provider value={{
        breadcrumb, setBreadcrumb
    }}>
        {children}
    </AppContext.Provider>
}