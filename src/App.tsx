import React, { useEffect, useState } from 'react';
import { fetcher } from './api/api';
import './App.scss';
import { Converter } from './components/Converter/Converter';
import { Header } from './components/Header/Header';
import { Currency } from './react-app-env';

export function roundToHundreds(num : number) {
  let amountOfCurrency = num;
    amountOfCurrency = Math.round(amountOfCurrency * 100) / 100  

  return amountOfCurrency;
}

export const App: React.FC = () => {

  const [exchangeCourse, setExchangeCourse] = useState<Currency>({});

  useEffect(() => {
    const getServerResponse = async () => {
      const result = await fetcher();

      setExchangeCourse(result.conversion_rates)
    }
    getServerResponse();
  }, []);

  return (
    <div className='container'>    
      <Header exchangeCourse={exchangeCourse}/>
      <Converter exchangeCourse={exchangeCourse}/> 
    </div>
  );
};

//
//