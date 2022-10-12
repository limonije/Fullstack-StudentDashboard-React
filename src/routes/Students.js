import { Link, Outlet } from "react-router-dom";
import data from "../data/data.json";

export default function Students() {
    let studentData = []
    data.map(item => {return studentData.push({name: item.name})})
    
    let uniq = {};
    const singleStudent = studentData.filter(student => !uniq[student.name] && (uniq[student.name] = true));

   return (
    <div className="Student-div">
      <nav className="Student-nav">
        {singleStudent.map((student) => (
          <Link 
            className="studentLink"
            to={`/Students/${student.name}`}
            key={student.name}
          >
            {student.name}
          </Link>
        ))}
      </nav>
      <Outlet />
    </div>
  );
}