import { useMemo } from "react";
import { useCryptoStore } from "../store";
import Spinner from "./Spinner";

export default function CriptoPriceDisplay() {
  const result = useCryptoStore((state) => state.result);
  const loading = useCryptoStore(state => state.loading);
  const hasResult = useMemo(() => !Object.values(result).includes(''),[result]); // Si no hay valores vacios significa que si hay un resultado

  return (
    <div className="result-wrapper">
        {loading 
            ? <Spinner /> 
            : hasResult && 
                (
                    <>
                    <h2>Cotizacion</h2>
                    <div className="result">
                        <img src={`https://cryptocompare.com/${result.IMAGEURL}`} alt="Imagen criptomoneda" />
                        <div>
                            <p>El precio es de: <span>{result.PRICE}</span></p>
                            <p>El más alto del día: <span>{result.HIGHDAY}</span></p>
                            <p>El más bajo del día: <span>{result.LOWDAY}</span></p>
                            <p>Variación últimas 24 horas: <span>{result.CHANGEPCT24HOUR}</span></p>
                            <p>Última actualización: <span>{result.LASTUPDATE}</span></p>
                        </div>
                    </div>
                    </>
                )
        }
      
    </div>
  );
}
