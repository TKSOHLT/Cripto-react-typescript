import { devtools } from "zustand/middleware";
import { create } from "zustand";
import type { CryptoCurrency, CryptoPrice, Pair } from "./types";
import { fetchCurrentCryptoPrice, getCryptos } from "./services/CryptoService";

type CryptoStore = {
  cryptocurrencies: CryptoCurrency[];
  result: CryptoPrice;
  loading: Boolean;
  fetchCryptos: () => Promise<void>;
  fetchData: (pair: Pair) => Promise<void>;
};

export const useCryptoStore = create<CryptoStore>()(
  devtools((set) => ({
    cryptocurrencies: [],
    result: {
        IMAGEURL: "",
        PRICE: "",
        HIGHDAY: "",
        LOWDAY: "",
        CHANGEPCT24HOUR: "",
        LASTUPDATE: "",
    },
    loading: false,
    fetchCryptos: async () => {
      //Acciones, existen acciones asincronas con async
      const cryptocurrencies = await getCryptos();
      set(() => ({
        cryptocurrencies, //Porque esto es igual a tener cryptocurrencies:cryptocurrencies
      }));
    },
    fetchData: async (pair) => {
      set(()=>({
        loading: true
      }));
      const result = await fetchCurrentCryptoPrice(pair);
      set(()=>({
        result, //Porque esto es igual a tener result: result
        loading: false
      }));
    },
  }))
);
