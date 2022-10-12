import { useParams } from "react-router-dom";
import AssignmentChart from "../charts/AssignmentChart"

export default function Assignment() {
    let params = useParams();
    return (
        <main>
            <h2>{params.AssignmentId}</h2>
            <AssignmentChart assignment={params.AssignmentId} />
        </main>
    );
}