import { useParams } from "react-router-dom";
import StudentChart from "../charts/StudentChart"

export default function Student() {
    let params = useParams();
    return (
        <main>
            <h2>{params.StudentId}</h2>
            <StudentChart student={params.StudentId} />
        </main>
    );
}