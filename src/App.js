import Currency from "./components/currency";
import React, {useState, useEffect} from 'react';

function App() {
  const [currencies, setCurrencies] = useState([["IDR", "23000"],["DAUN", "14000"]]);
  

useEffect(() => {
    fetch("https://api.currencyfreaks.com/latest?apikey=f0a5d88f62fc42f89a39414aaf75510c&symbols=GBP,CAD,JPY,IDR,CHF,AUD,SGD")
    .then(res => res.json())
    .then((result) => {
      for(const [k, e] of Object.entries(result.rates)){
        const arrayx = currencies;
        arrayx.push([k, String(parseFloat(Number(e).toFixed(4)))]);
        setCurrencies(arrayx);
        console.log(arrayx);
        //console.log(typeof(k),typeof(e));
      }
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
                  currencies.map((e,i) => {
                    return <Currency key={i} denom={e[0]} buy={e[1]} rate={e[1]} sell={e[1]} />;
                  }

                  )
                }
{/*                 <Currency denom="CAD" buy="1.3" rate="1.25" sell="1.19"/>
                <Currency denom="IDR" buy="15076" rate="14358" sell="13674"/>
                <Currency denom="CHF" buy="0.96" rate="0.91" sell="0.87"/>
                <Currency denom="JPY" buy="120" rate="114" sell="109"/>
                <Currency denom="GBP" buy="0.77" rate="0.735" sell="0.7005"/>
                <Currency denom="EUR" buy="0.927" rate="0.88" sell="0.84"/> */}
              </tbody>
          </table>
        </div>
        <div className='text-3xl text-white text-center mt-4'>
          <h1>Rates are based from 1 USD.</h1>
          <h1>This application uses API from https://currencyfreaks.com tapi boong.</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
