import { useParams } from "react-router-dom";
import StudentChart from "../StudentChart"

export default function Student() {
    let params = useParams();
    return (
        <main style={{ padding: "1rem" }}>
            <h2>{params.StudentId}</h2>
            <StudentChart student={params.StudentId} />
        </main>
    );
  }