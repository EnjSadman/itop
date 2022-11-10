import React from "react";
import './Header.scss'

interface Props {
  exchangeCourse:number[],
}

export const Header : React.FC<Props> = ({ exchangeCourse }) => {

  return (
    <header className="header">
      <div className="header__container container">
        <h1 className="header__currency">{exchangeCourse[0]} USD</h1>
        <h1 className="header__currency">{exchangeCourse[1]} EUR</h1>
      </div>
    </header>
  )
}