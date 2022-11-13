import React from "react";
import { roundToHundreds } from "../../App";
import { Currency } from "../../react-app-env";
import './Header.scss'

interface Props {
  exchangeCourse:Currency,
}

export const Header : React.FC<Props> = ({ exchangeCourse }) => {

  return (
    <header className="header">
      <div className="header__container">
        <h1 className="header__currency">{roundToHundreds(1 / +exchangeCourse["USD"])} UAH per USD</h1>
        <h1 className="header__currency">{roundToHundreds(1 / +exchangeCourse["EUR"])} UAH per EUR</h1>
      </div>
    </header>
  )
}