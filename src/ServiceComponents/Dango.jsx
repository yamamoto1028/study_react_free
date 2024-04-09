import React from 'react'
import './Service.css';
import dango from '../images/PC_Project_1.jpg';

export const Dango = () => {
  return (
    <div className="AllWrapper">
      <h1 className="pageTitle">事業内容</h1>
      <div className="dangoContainer">
        <div className="textContainer">
          <h2 className="dangoTitle">団子制作</h2>
          <p className="dangoText">団子制作のテキスト。団子制作のテキスト。団子制作のテキスト。団子制作のテキスト。団子制作のテキスト。団子制作のテキスト。団子制作のテキスト。団子制作のテキスト。団子制作のテキスト。団子制作のテキスト。団子制作のテキスト。団子制作のテキスト。団子制作のテキスト。</p>
        </div>
        <div className="imageContainer">
          <img src={dango} className="dangoImage" alt="dango" />
        </div>
      </div>
    </div>
  )
}
