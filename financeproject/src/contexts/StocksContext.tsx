import { ReactNode, createContext, useEffect, useState } from "react";
import { api, apiUrl } from "../lib/axios";

interface Stocks {
    "stock": string
    "name" : string
    "close": number,
    "change": number,
    "volume": number,
    "market_cap": number,
    "logo": string,
    "sector": string,
    "type": string
}

interface StocksContextType{
    stocks: Stocks[];
    fetchStocks: (query?: string) => Promise<void>;
}

interface StocksProviderProps {
    children: ReactNode
}

export const StocksContext = createContext({} as StocksContextType);

export function StocksProvider({ children }: StocksProviderProps) {
    const [stocks, setStocks] = useState<Stocks[]>([]);

    async function fetchStocks() {
      const response = await api.get(apiUrl)
      
      console.log(response.data.stocks)
      setStocks(response.data.stocks)
    }
    useEffect(() => {
        fetchStocks()
      }, []);

      return (
        <StocksContext.Provider value={{
          stocks,
          fetchStocks,
        }}>
          {children}
        </StocksContext.Provider>
      );

}
