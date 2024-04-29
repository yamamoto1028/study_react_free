import React from 'react'

export const Form = () => {
  return (
    <div className="formPage">
        <h1 className="contactTitle">お問い合わせ</h1>
        <div className="formContainer">
          <form className="formContent" action="">
            <div className="formName formItem">
              <label htmlFor="" className="nameLabel labelContent">お名前</label>
              <input type="text" className="nameInput inputContent" />
            </div>
            <div className="formMail formItem">
              <label htmlFor="" className="mailLabel labelContent">メールアドレス</label>
              <input type="text" className="mailInput inputContent" />
            </div>
            <div className="formTitle formItem">
              <label htmlFor="" className="labelTitle labelContent">タイトル</label>
              <input type="text" className="titleInput inputContent" />
            </div>
            <div className="formTextarea formItem">
              <label htmlFor="" className="msgLabel labelContent">メッセージ</label>
              <textarea className="msgTextarea inputContent"></textarea>
            </div>
            <div className="buttonContainer">
              <button className="formBtn">送信する</button>
            </div>
          </form>
        </div>
    </div>
  )
}


