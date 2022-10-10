//import StudentCharts from "../StudentCharts";
import { Link, Outlet } from "react-router-dom";
import data from "../data/data.json";


export default function Students() {
    let studentData = []
    data.map(item => {return studentData.push({name: item.name})})
    console.log("Data file for routing:", studentData)
    let uniq = {};
    const singleStudent = studentData.filter(student => !uniq[student.name] && (uniq[student.name] = true));

    const handleLinkClick = (event, value) => {
      console.log('Link clicked');
      console.log(value);
    };

  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        {singleStudent.map((student) => (
          <Link
            style={{ display: "block", margin: "1rem 0" }}
            to={`/Students/${student.name}`}
            key={student.name}
            value={student.name}
            onClick={event => handleLinkClick(event, student.name)}       
          >
            {student.name}
          </Link>
        ))}
      </nav>
      <Outlet />
    </div>
  );
}