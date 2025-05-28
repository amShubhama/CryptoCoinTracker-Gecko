import { createContext, useState } from "react";

export const CurrencyContext = createContext();

const CurrencyContextProvider = ({ children }) => {
    const [currency, setCurrency] = useState('usd');
    return (
        <CurrencyContext.Provider value={{ currency, setCurrency }}>
            {children}
        </CurrencyContext.Provider>
    )
}

export default CurrencyContextProvider;