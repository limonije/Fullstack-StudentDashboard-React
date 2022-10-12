import { Link, Outlet } from "react-router-dom";
import data from "../data/data.json";

export default function Assignments() {
    let assignmentData = []
    data.map(item => {return assignmentData.push({assignment: item.assignment})})
      
    let uniq = {};
    const singleAssignment = assignmentData.filter(assignment => !uniq[assignment.assignment] && (uniq[assignment.assignment] = true));
    
    return (
      <div className="Assignment-div">
        <nav className="Assignment-nav">
          {singleAssignment.map((assignment) => (
            <Link 
              className="assignmentLink"
              to={`/Assignments/${assignment.assignment}`}
              key={assignment.assignment}
            >
              {assignment.assignment}
            </Link>
          ))}
        </nav>
      <Outlet />
    </div>
  );
}