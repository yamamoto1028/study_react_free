import React from 'react'
import Human from '../images/Member.jpg';

export const Member = (props) => {
  let postClassName = '';
  if (props.post === '代表') {
    postClassName = 'ceoPost';
  } else if (props.post === '社員'){
    postClassName = 'regularPost';
  } else {
    postClassName = 'otherPost';
  }
  return (
    <div className="staffPage">
      <h2 className={`postName ${postClassName}`}>{ props.post }</h2>
      <section className="memberWrapper">
        <div className="staffWrapper">
          <div className="textWrapper">
            <div className="textBox">
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
          </div>
          <div className="imageWrapper">
            <img src={ Human } alt={ props.staffImage } className='staffImage' />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Member;