import React from 'react';
import './Header.css';
import header_bhive from '../../assets/header_bhive.svg';
import phone from '../../assets/phone.svg';

function Header() {
  return (
    <div>
      <header>
        <div className="header">
          <div className='bhive_logo'>
            <img src={header_bhive} width={'100%'} alt='Header' />
          </div>
          <div className="borderBox">
            <img src={phone} alt='phone' />
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
