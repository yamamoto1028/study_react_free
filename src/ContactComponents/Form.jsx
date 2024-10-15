import React, { useState } from "react";
import { FormWrap } from "./FormWrap.jsx"; //フォーム入力部分
import { Msg } from "./CompleteMSG.jsx"; //送信完了メッセージ

export const Form = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);

  const formFields = [
    {
      divClassName: "formName formItem",
      htmlFor: "field-name",
      labelClassName: "nameLabel labelContent",
      title: "お名前",
      type: "text",
      inputClassName: "nameInput inputContent",
      name: "entry.1964537088",
      id: "field-name",
      required: "required",
    },
    {
      divClassName: "formMail formItem",
      htmlFor: "mail-field",
      labelClassName: "mailLabel labelContent",
      title: "メールアドレス",
      type: "email",
      inputClassName: "mailInput inputContent",
      name: "entry.575381573",
      id: "mail-field",
      required: "required",
    },
    {
      divClassName: "formTitle formItem",
      htmlFor: "title-field",
      labelClassName: "abelTitle labelContent",
      title: "タイトル",
      type: "text",
      inputClassName: "titleInput inputContent",
      name: "entry.725750459",
      id: "title-field",
      required: "required",
    },
  ];

  return (
    <div className="formPage" id="formPage">
      <h1 className="contactTitle">お問い合わせ</h1>
      <div className="formContainer">
        <form
          className="formContent"
          action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSfOxi9O3klqRXrMZOM05-q-I6SciDbG-XpcCrVcIYXqScBW9g/formResponse"
          id="contactForm"
          method="POST"
          target="modal"
          onSubmit={openModal}
        >
          {formFields.map((field, index) => (
            <FormWrap key={index} {...field} />
          ))}
          <div className="formTextarea formItem">
            <label htmlFor="massage-field" className="msgLabel labelContent">
              メッセージ
            </label>
            <textarea
              className="msgTextarea inputContent"
              name="entry.272064075"
              id="massage-field"
              required
            ></textarea>
          </div>
          <div className="buttonContainer">
            <button type="submit" className="formBtn">
              送信する
            </button>
          </div>
        </form>
        <iframe
          className="modalPage"
          src=""
          title="GoogleフォームHidden"
          name="modal"
          id="modalPage"
        ></iframe>
        {isModalOpen && <Msg setIsModalOpen={setIsModalOpen} />}
      </div>
    </div>
  );
};
