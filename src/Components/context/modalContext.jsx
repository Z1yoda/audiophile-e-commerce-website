// ModalContext.js
import React, { createContext, useState, useContext } from "react";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
    const [isCartModalOpen, setIsCartModalOpen] = useState(false)

    return (
        <ModalContext.Provider value={{ isCartModalOpen, setIsCartModalOpen }}>
            {children}
        </ModalContext.Provider>
    );
};

export const useModal = () => useContext(ModalContext);
