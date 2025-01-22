import React, { createContext, useContext, useState } from "react";

interface PageContextProps {
    currentPage: string;
    setCurrentPage: (page: string) => void;
}

const PageContext = createContext<PageContextProps | undefined>(undefined);

export const PageProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [currentPage, setCurrentPage] = useState<string>("home");

    return (
        <PageContext.Provider value={{ currentPage, setCurrentPage }}>
            {children}
        </PageContext.Provider>
    );
};

export const usePage = () => {
    const context = useContext(PageContext);
    if (!context) {
        throw new Error("usePage must be used within a PageProvider");
    }
    return context;
};
