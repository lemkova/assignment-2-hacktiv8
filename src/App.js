import Currency from "./components/currency";
import React, {useState, useEffect} from 'react';

function App() {

  const [data, setData] = useState([]);
  

useEffect(() => {
    fetch("https://api.currencyfreaks.com/latest?apikey=f0a5d88f62fc42f89a39414aaf75510c&symbols=GBP,CAD,JPY,IDR,CHF,AUD,SGD")
    .then(res => res.json())
    .then((result) => {
      const arrays = [];
      for(const [k, e] of Object.entries(result.rates)){
        arrays.push([k, String(parseFloat(Number(e).toFixed(4)))]);
      }
      setData(arrays);
    })
  }, [])
  return (
    <div className="flex justify-center my-80">
      <div>
        <div className='flex justify-center'>
          <table className="text-3xl text-center text-white">
              <thead className="text-white">
                  <tr>
                      <th scope="col" className="py-1 px-6">
                          Currency
                      </th>
                      <th scope="col" className="py-1 px-6">
                          We Buy
                      </th>
                      <th scope="col" className="py-1 px-6">
                          Exchange Rate
                      </th>
                      <th scope="col" className="py-1 px-6">
                          We Sell
                      </th>
                  </tr>
              </thead>
              <tbody>
                {
                  data.map((e,i) => {
                    return <Currency key={i} denom={e[0]} rate={e[1]} />;
                  }

                  )
                }
              </tbody>
          </table>
        </div>
        <div className='text-3xl text-white text-center mt-4'>
          <h1>Rates are based from 1 USD.</h1>
          <h1>This application uses API from https://currencyfreaks.com.</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
