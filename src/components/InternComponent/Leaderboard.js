import { useState } from "react";
import Interns from "../InternData/Interns";
import InternsUpload from "../InternComponent/InternsUpload";

const Leaderboard = () => {
  const [FrontendInterns, setFrontendInterns] = useState(Interns);
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Attendance</th>
            <th>Bonus</th>
            <th>Strikes</th>
            <th>Power Ranking</th>
          </tr>
          <InternsUpload data={FrontendInterns} />
        </thead>
      </table>
    </>
  );
};
export default Leaderboard;
