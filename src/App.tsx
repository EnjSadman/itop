import { ServerResponse } from 'http';
import React, { useEffect, useState } from 'react';
import { fetcher } from './api/api';
import './App.scss';
import { Header } from './components/Header/Header';
import { Currency } from './react-app-env';

export const App: React.FC = () => {

  const [exchangeCourse, setExchangeCourse] = useState<number[]>([]);

  useEffect(() => {
    const getServerResponse = async () => {
      //const result = await fetcher();
      let USD = 0.02701;
      let EUR = 0.02689;
      if (USD < 1) {
        USD = Math.round((1 / USD) * 100) / 100;
      }

      if (EUR < 1) {
        EUR = Math.round((1 / EUR) * 100) / 100;
      }
      //setExchangeCourse([result.conversion_rates['USD'], result.conversion_rates['EUR']]);

      setExchangeCourse([USD, EUR]) 
    }
    getServerResponse();
  }, []);

  return (
    <Header exchangeCourse={exchangeCourse}/>
  );
};
