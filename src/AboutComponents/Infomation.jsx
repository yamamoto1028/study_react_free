import React from "react";
import { Info } from "./infoRow.jsx";

export const Infomation = () => {
  return (
    <div className="infomationPage">
      <h1 className="sectionTitle">会社概要</h1>
      <div className="infomationContainer">
        <table className="infomationTable">
          <Info tableHeader="社名" tableData="株式会社かいはつ" />
          <Info tableHeader="住所" tableData="東京都千代田区" />
          <Info tableHeader="代表" tableData="代表取締役  開発桃太郎" />
          <Info tableHeader="電話番号" tableData="00-0000-0000" />
          <Info tableHeader="資本金" tableData="10,000,000円" />
          <Info tableHeader="設立" tableData="2022年1月" />
        </table>
      </div>
    </div>
  );
};
