import React from 'react'
import '../App.css';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div className='header-main'>
      <div className="logo">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <div className='rooterListContainer'>
        <p className='rooterList'>
          <Link to="/">事業紹介</Link> | 
          <Link to="/about">会社概要</Link> | 
          <Link to="/staff">社員紹介</Link> | 
          <Link to="/contact">お問い合わせ</Link>
        </p>
      </div>
    </div>
  )
}

