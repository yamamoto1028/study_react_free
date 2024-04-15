import React from 'react'
import Human from '../images/Member.jpg';

export const Member = (props) => {
  return (
    <div>
      <h2 className='postName'>{ props.post }</h2>
      <section className="memberWrapper">
        <div className="textWrapper">
          <div className="nameTitle">
            <div className="kindsPost">{ props.Department }</div>
            <div className="staffName">{ props.name }</div>
          </div>
          <div className="textContainer">
            <p className="careerText">{ props.career }</p>
            <p className="beliefText">{ props.berief }</p>
            <p className="ExcitedText">{ props.excited }</p>
          </div>
        </div>
        <div className="imageWrapper">
          <img src={ Human } alt={ props.staffImage } className='staffImage' />
        </div>
      </section>
    </div>
  )
}

export default Member;