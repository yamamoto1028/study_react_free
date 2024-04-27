import React from 'react'

export const Form = () => {
  return (
    <div className="formPage">
        <h1 className="contactTitle">お問い合わせ</h1>
        <div className="formContainer">
          <form action="">
            <div className="formName">
              <label htmlFor="" className="nameLabel">お名前</label>
              <input type="text" className="nameInput" />
            </div>
            <div className="formMail">
              <label htmlFor="" className="mailLabel">メールアドレス</label>
              <input type="text" className="mailInput" />
            </div>
            <div className="formTitle">
              <label htmlFor="" className="labelTitle">タイトル</label>
              <input type="text" className="titleInput" />
            </div>
            <div className="formTextarea">
              <label htmlFor="" className="msgLabel">メッセージ</label>
              <textarea name="" id="" cols="30" rows="10" className="msgTextarea"></textarea>
            </div>
          </form>
        </div>
    </div>
  )
}


