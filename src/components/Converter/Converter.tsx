import React, { useState } from "react";
import { roundToHundreds } from "../../App";
import { Currency } from "../../react-app-env";
import './Converter.scss';

interface Props {
  exchangeCourse: Currency;
}

export const Converter : React.FC<Props> = ({ exchangeCourse }) => {
  const [firstCurrency, setFirstCurrency] = useState<string>('UAH');
  const [amountOfFirstCurrency, setAmountOfFirstCurrency] = useState(0);
  const [secondCurrency, setSecondCurrency] = useState<string>('USD');
  const [amountOfSecondCurrency, setAmountOfSecondCurrency] = useState(0);

  return (
    <div>
      <div className="converter">
        <div className="converter__field">
          <select
            className="converter__currency"
            name="currency"
            value={firstCurrency}
            onChange={(event) => {
              setFirstCurrency(event.target.value);
              if (+exchangeCourse[event.target.value] !== 1 && +exchangeCourse[secondCurrency] === 1) {
                setAmountOfSecondCurrency(roundToHundreds(amountOfFirstCurrency / +exchangeCourse[event.target.value] * (+exchangeCourse[secondCurrency])))
              } else {
                setAmountOfSecondCurrency(roundToHundreds(amountOfFirstCurrency * +exchangeCourse[event.target.value] / (+exchangeCourse[secondCurrency])))
              }
            }}
          >
            <option value="USD">
              USD
            </option>
            <option value="EUR">
              EUR
            </option>
            <option value="UAH">
              UAH
            </option>
          </select>
          <input
            className="converter__input"
            type="text"
            placeholder="Amount"
            value={amountOfFirstCurrency}
            onChange={(event) => {
              if (!isNaN(+event.target.value)) {
                setAmountOfFirstCurrency(+event.target.value);
                if (+exchangeCourse[firstCurrency] !== 1 && +exchangeCourse[firstCurrency] === 1) {
                  setAmountOfSecondCurrency(roundToHundreds(+event.target.value / +exchangeCourse[firstCurrency] / (+exchangeCourse[secondCurrency])))
                } else {
                  setAmountOfSecondCurrency(roundToHundreds(+event.target.value / +exchangeCourse[firstCurrency] * (+exchangeCourse[secondCurrency])))
                }
              }
            }}
          />
        </div>
        <div className="converter__field">
          <select
            className="converter__currency"
            name="currency"
            value={secondCurrency}
            onChange={(event) => {
              setSecondCurrency(event.target.value);
              if (+exchangeCourse[event.target.value] !== 1 && +exchangeCourse[firstCurrency] === 1) {
                setAmountOfFirstCurrency(roundToHundreds(amountOfSecondCurrency / +exchangeCourse[event.target.value] * (+exchangeCourse[firstCurrency])))
              } else {
                setAmountOfFirstCurrency(roundToHundreds(amountOfSecondCurrency * +exchangeCourse[event.target.value] / (+exchangeCourse[firstCurrency])))
              }
            }}
          >
            <option value="USD">
              USD
            </option>
            <option value="EUR">
              EUR
            </option>
            <option value="UAH">
              UAH
            </option>
          </select>
          <input
            type="text"
            className="converter__input"
            placeholder="Amount"
            value={amountOfSecondCurrency}
            onChange={(event) => {
              if (!isNaN(+event.target.value)) {
                setAmountOfSecondCurrency(+event.target.value);
                if (+exchangeCourse[secondCurrency] !== 1 && +exchangeCourse[firstCurrency] === 1) {
                  setAmountOfFirstCurrency(roundToHundreds(+event.target.value / +exchangeCourse[secondCurrency] / (+exchangeCourse[firstCurrency])))
                } else {
                  setAmountOfFirstCurrency(roundToHundreds(+event.target.value / +exchangeCourse[firstCurrency] * (+exchangeCourse[secondCurrency])))
                }
              }
            }}
          />
        </div>
      </div>
    </div>
  )
}
