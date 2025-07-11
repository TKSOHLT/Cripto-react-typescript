import { z } from "zod";
import {
  CurrencySchema,
  CryptoCurrencyResponseScheme,
  PairSchema,
  CryptoPriceSchema,
} from "../schema/cripto-schema";

//Recordemos que para hacer un infer, se debe primero tener un schema
//En este caso, el schema està en src/schema/cripto-schema.ts
export type Currency = z.infer<typeof CurrencySchema>;
export type CryptoCurrency = z.infer<typeof CryptoCurrencyResponseScheme>;
export type Pair = z.infer<typeof PairSchema>;
export type CryptoPrice = z.infer<typeof CryptoPriceSchema>;
