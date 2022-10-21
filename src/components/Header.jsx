import React from 'react';
import LogoEmp from '../image/emp_soluc.png';
import './Header.css';

function Header() {
  return (
    <div>
      <header className="header" id="header">
        <div className="header__logo">
          <img className="header__img" src={LogoEmp} alt="Logo Emperador Soluciones" />
        </div>
      </header>
    </div>
  );
}

export default Header;