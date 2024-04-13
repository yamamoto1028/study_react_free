import React from 'react'

export const Infomation = () => {
  return (
    <div className="infomationPage">
      <h1 className="sectionTitle">会社概要</h1>
      <div className="infomationContainer">
        <table className="infomationTable">
          <tr className="infoTableRow">
            <th className="infoTableHeader">社名</th>
            <td className="infoTableData">株式会社かいはつ</td>
          </tr>
          <tr className="infoTableRow">
            <th className="infoTableHeader">住所</th>
            <td className="infoTableData">東京都千代田区</td>
          </tr>
          <tr className="infoTableRow">
            <th className="infoTableHeader">代表</th>
            <td className="infoTableData">代表取締役<span>開発桃太郎</span></td>
          </tr>
          <tr className="infoTableRow">
            <th className="infoTableHeader">電話番号</th>
            <td className="infoTableData">00-0000-0000</td>
          </tr>
          <tr className="infoTableRow">
            <th className="infoTableHeader">資本金</th>
            <td className="infoTableData">10,000,000円</td>
          </tr>
          <tr className="infoTableRow">
            <th className="infoTableHeader">設立</th>
            <td className="infoTableData">2022年1月</td>
          </tr>
        </table>
      </div>
    </div>
  )
}

