import React from "react";

export const Msg = ({ setIsModalOpen }) => {
  const closeModal = () => {
    setIsModalOpen(false);
    let thanks = document.getElementById("contactForm"); //フォーム全体の
    thanks.reset(); //フォームの入力内容をリセットする
  };
  const reFocus = () => {
    let closeFocus = document.getElementById("closeBtn");
    closeFocus.focus();
  };
  return (
    <div>
      <div className="modalBack" id="modalBack"></div>
      <div className="modalContainer" id="modalContainer">
        <div className="modalScreen">
          <p className="modaltext">送信完了しました</p>
          <button
            className="closeBtn"
            id="closeBtn"
            onClick={closeModal}
            onBlur={reFocus}
          ></button>
        </div>
      </div>
    </div>
  );
};
