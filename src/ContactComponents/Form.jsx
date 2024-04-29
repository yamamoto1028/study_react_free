import React from 'react'

export const Form = () => {
  function openModal() {
    let modal = document.getElementById('modalContainer');//modalのidを取得
    modal.style.display = 'block';//モーダルを表示する
    let closeBtn = document.getElementById('closeBtn');
    closeBtn.focus();//閉じるボタンにフォーカスを当てる
    // alert("送信完了しました（アラート関数）");
  }

  function closeModal() {
    let modal = document.getElementById('modalContainer');//modalのidを取得
    modal.style.display = 'none';//モーダルを非表示にする
    let thanks = document.getElementById('contactForm');//フォーム全体のidを取得
    thanks.reset();//フォームの入力内容をリセットする
  }

  return (
    <div className="formPage">
        <h1 className="contactTitle">お問い合わせ</h1>
        <div className="formContainer">
          <form className="formContent" 
          action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSfOxi9O3klqRXrMZOM05-q-I6SciDbG-XpcCrVcIYXqScBW9g/formResponse" 
          id='contactForm'
          method='POST' 
          target='modal'
          onSubmit={ openModal }>
            <div className="formName formItem">
              <label htmlFor="" className="nameLabel labelContent">お名前</label>
              <input 
              type="text" 
              className="nameInput inputContent" 
              name='entry.1964537088'
              id='field-name'
              required="required"
              placeholder='やまもと'/>
            </div>
            <div className="formMail formItem">
              <label htmlFor="" className="mailLabel labelContent">メールアドレス</label>
              <input 
              type="email" 
              className="mailInput inputContent" 
              name='entry.575381573'
              id='mail-field'
              required="required"/>
            </div>
            <div className="formTitle formItem">
              <label htmlFor="" className="labelTitle labelContent">タイトル</label>
              <input 
              type="text" 
              className="titleInput inputContent" 
              name='entry.725750459'
              id='title-field'
              required="required"
              />
            </div>
            <div className="formTextarea formItem">
              <label htmlFor="" className="msgLabel labelContent">メッセージ</label>
              <textarea 
              className="msgTextarea inputContent"
              name='entry.272064075' 
              id='massage-field' 
              required="required"
              ></textarea>
            </div>
            <div className="buttonContainer">
              <button type='submit' 
              className="formBtn" 
              >送信する</button>
            </div>
          </form>
          <iframe className='modalPage' src="" frameborder="0" name='modal' id='modalPage'>
          </iframe>
            <div className="modalContainer" id='modalContainer'>
              <div className="modalScreen">
                <p className="modaltext">送信完了しました</p>
                <button className="closeBtn" onClick={ closeModal } id='closeBtn'></button> 
              </div>
            </div>
        </div>
    </div>
  )
}


