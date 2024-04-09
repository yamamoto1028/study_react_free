import React from 'react'
import oni from '../images/PC_Project_2.jpg';

export const Onitaiji = () => {
  return (
      <div className="AllWrapper">
      <div className="oniContainer">
        <div className="imageContainer">
          <img src={oni} className="oniImage" alt="onitaiji" />
        </div>
        <div className="textContainer">
          <h2 className="oniTitle">鬼退治</h2>
          <p className="oniText">鬼退治のテキスト。鬼退治のテキスト。鬼退治のテキスト。鬼退治のテキスト。鬼退治のテキスト。鬼退治のテキスト。鬼退治のテキスト。鬼退治のテキスト。鬼退治のテキスト。鬼退治のテキスト。鬼退治のテキスト。鬼退治のテキスト。鬼退治のテキスト。</p>
        </div>
      </div>
    </div>
  )
}
