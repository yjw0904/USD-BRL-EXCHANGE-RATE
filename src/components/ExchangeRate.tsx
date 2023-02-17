import React, { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import './ExchangeRate.css'

interface Rate {
  rate: number;
  timestamp: string;
}

const ExchangeRate: React.FC = () => {
  const [rates, setRates] = useState<Rate[]>([]);

  const getRates = async () => {
    const now = moment().format('YYYY-MM-DD');
    const thirtyDaysAgo = moment().subtract(30, 'days').format('YYYY-MM-DD');
    const url = `https://api.exchangerate.host/timeseries?start_date=${thirtyDaysAgo}&end_date=${now}&base=USD&symbols=BRL`;

    const response = await axios.get(url);

    const rates: Record<string, Record<string, number>> = response.data.rates;
    const timestamps = Object.keys(rates).sort();

    const convertedRates = timestamps.map((timestamp) => {
      return {
        rate: rates[timestamp].BRL,
        timestamp,
      };
    });

    setRates(convertedRates);
  };

  useEffect(() => {  
    getRates();
  }, []);

  if (rates.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className='Currency-Table'>
      <table>
        <h1>USD to BRL Conversion Rate</h1>
        <p>Exchange rate for the last 30 days:</p>
        <tr>
          <th>Timestamp</th>
          <th>Rate</th>
        </tr>
        <tbody>
          {rates.map((rate, index) => (
            <tr key={index}>
              <td>{moment(rate.timestamp).format('MMMM Do YYYY, h:mm:ss a')}</td>
              <td>{rate.rate.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExchangeRate;
