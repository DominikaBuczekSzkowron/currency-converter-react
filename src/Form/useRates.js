import { useEffect, useState } from "react";

export const useRates = () => {
  const [fetchstate, setFetchState] = useState({ state: "loading" });
  const [rates, setRates] = useState([{ symbol: "ASD", rate: 1000 }]);
  const [fetchDate, setFetchDate] = useState(undefined);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          "https://api.exchangerate.host/latest?base=PLN",
          { cache: "no-store" }
        );

        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const data = await response.json();
        setTimeout(() => {
          setFetchState({
            state: "success",
          });
          setFetchDate(data.date);
          setRates(
            Object.entries(data.rates).map((el) => {
              return { symbol: el[0], rate: el[1] };
            })
          );
        }, 2000);
      } catch (error) {
        setFetchState({
          state: "error",
          info: `${error}`,
        });
        console.error(error);
      }
    })();
  }, []);

  return [rates, fetchDate, fetchstate];
};
