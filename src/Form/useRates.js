import { useEffect, useState } from "react";
// import axios from "axios";

// var requestURL = "https://api.exchangerate.host/latest?base=PLN";
// var request = new XMLHttpRequest();
// request.open("GET", requestURL);
// request.responseType = "json";
// request.send();

// request.onload = function () {
//   var response = request.response;
//   console.log(response);
// };

export const useRates = () => {
  const [rates, setRates] = useState([{ symbol: "ASD", rate: 1000 }]);

  const [fetchDate, setFetchDate] = useState(undefined);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://api.exchangerate.host/latest?base=PLN",
        { cache: "no-store" }
      );
      const data = await response.json();
      setFetchDate(data.date);
      setRates(
        Object.entries(data.rates).map((el) => {
          return { symbol: el[0], rate: el[1] };
        })
      );
      console.log(data.rates);
    })();
  }, []);

  // useEffect(() => {
  //   axios
  //     .get("https://api.exchangerate.host/latest?base=PLN")
  //     .then((response) => console.log(response.rates))
  //     .catch((error) => console.error("Coś jest nie tak!", error));

  // });

  return [rates, fetchDate];
};
