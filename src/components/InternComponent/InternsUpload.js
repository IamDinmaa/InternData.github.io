import React from "react";
import Interns from "../InternData/Interns";
const InternsUpload = (props) => {
  console.log(Interns);
  return (
    <>
      {props.data.interns.map((intern) => (
        <tr key={intern.id}>
          <td>{intern.FirstName}</td>
          <td>{intern.lastName}</td>
          <td>{intern.attendance}</td>
          <td>{intern.bonus}</td>
          <td>{intern.strikes}</td>
          <td>{intern.powerRanking}</td>
        </tr>
      ))}
    </>
  );
};

export default InternsUpload;
