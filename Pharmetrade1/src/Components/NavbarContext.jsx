import React, { createContext, useContext, useState } from 'react';

const NavbarContext = createContext();

export const useNavbarContext = () => useContext(NavbarContext);

export const NavbarProvider = ({ children }) => {
    const [pop, setPop] = useState(false);

   

    return (
        <NavbarContext.Provider value={{ pop, setPop }}>
            {children}
        </NavbarContext.Provider>
    );
};
