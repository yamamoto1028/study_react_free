import React,{ useState, useEffect } from 'react'
const MyModal = () => {
  const [ isModalOpen, setIsModalOpen ] = useEffect(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if(isModalOpen && event.key === 'Tab') {
        event.preventDefault();
      }
    }
    if(isModalOpen) {
      window.addEventListener('keydown', handleKeyDown)
    }

    return() => {
      window.removeEventListener('keydown', handleKeyDown)
    };
  },[isModalOpen]);
};

export const Form = () => {

  function openModal() {
    let modal = document.getElementById('modalContainer');//modalのidを取得
    modal.style.display = 'block';//モーダルを表示する
    let modalBack = document.getElementById('modalBack');
    modalBack.style.display = 'block';//モーダル背景の表示
    let closeBtn = document.getElementById('closeBtn');
    closeBtn.focus();//閉じるボタンにフォーカスを当てる
    // alert("送信完了しました（アラート関数）");
  }

  function closeModal() {
    let modal = document.getElementById('modalContainer');//modalのidを取得
    modal.style.display = 'none';//モーダルを非表示にする
    let modalBack = document.getElementById('modalBack');
    modalBack.style.display = 'none';//モーダル背景を非表示
    let thanks = document.getElementById('contactForm');//フォーム全体の
    thanks.reset();//フォームの入力内容をリセットする
  }

  function reFocus() {
    let closeFocus = document.getElementById('closeBtn');
    closeFocus.focus();
  }
  return (
    <div className="formPage" id='formPage'>
        <h1 className="contactTitle">お問い合わせ</h1>
        <div className="formContainer">
          <form className="formContent" 
          action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSfOxi9O3klqRXrMZOM05-q-I6SciDbG-XpcCrVcIYXqScBW9g/formResponse" 
          id='contactForm'
          method='POST' 
          target='modal'
          onSubmit={ openModal }>
            <div className="formName formItem">
              <label htmlFor="field-name" className="nameLabel labelContent">お名前</label>
              <input 
              type="text" 
              className="nameInput inputContent" 
              name='entry.1964537088'
              id='field-name'
              required="required"
              />
            </div>
            <div className="formMail formItem">
              <label htmlFor="mail-field" className="mailLabel labelContent">メールアドレス</label>
              <input 
              type="email" 
              className="mailInput inputContent" 
              name='entry.575381573'
              id='mail-field'
              required="required"/>
            </div>
            <div className="formTitle formItem">
              <label htmlFor="title-field" className="labelTitle labelContent">タイトル</label>
              <input 
              type="text" 
              className="titleInput inputContent" 
              name='entry.725750459'
              id='title-field'
              required="required"
              />
            </div>
            <div className="formTextarea formItem">
              <label htmlFor="massage-field" className="msgLabel labelContent">メッセージ</label>
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
          <div className="modalBack" id='modalBack'></div>
          <div className="modalContainer" id='modalContainer'>
            <div className="modalScreen">
              <p className="modaltext">送信完了しました</p>
              <button className="closeBtn" id='closeBtn' onClick={ closeModal } onBlur={ reFocus }></button> 
            </div>
          </div>
        </div>
    </div>
  )
}


