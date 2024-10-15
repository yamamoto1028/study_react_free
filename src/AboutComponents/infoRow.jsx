import React from "react";

export const Info = (props) => {
  return (
    <tr className="infoTableRow">
      <th className="infoTableHeader">{props.tableHeader}</th>
      <td className="infoTableData">{props.tableData}</td>
    </tr>
  );
};
