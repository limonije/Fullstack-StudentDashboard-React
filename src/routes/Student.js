import { useParams } from "react-router-dom";
import StudentChartSandra from "../StudentChartSandra"

export default function Student() {
    let params = useParams();
    return (
        <main style={{ padding: "1rem" }}>
            <h2>{params.StudentId}</h2>
            {params.StudentId === "Sandra" ? <StudentChartSandra /> : ""}
        </main>
    );
  }