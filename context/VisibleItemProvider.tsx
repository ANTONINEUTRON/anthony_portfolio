"use client"
import { ReactNode, createContext, useState } from "react";

export interface VItemContextProps {
    stringValue: string[];
    setStringValue: (newStringValue: []) => void;
}
  
export const VisibleItemContext = createContext<VItemContextProps | null>(null);

const VisibleItemProvider = ({children}: {children: ReactNode})=>{
    const [stringValue, setStringValue] = useState([]);

    return (
        <VisibleItemContext.Provider value={{ stringValue, setStringValue }}>
            {children}
        </VisibleItemContext.Provider>
    );
}

export default VisibleItemProvider