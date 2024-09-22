import Candidate from "../interfaces/Candidate.interface";
import { FcCancel, FcPlus } from "react-icons/fc";

interface CandCardProps {
    candidate: Candidate;
    Choice: (isSelected: boolean) => void;
}

const CandCard = ({ candidate, Choice }: CandCardProps) => {
    return (
        <div className="CandCard">
            <img src={`${candidate.avatar_url}`} alt={`${candidate.name} profile picture`} />
            <div className="CandCardBody">
                <h2>{candidate.name}</h2>
                <p>{candidate.bio}</p>
                <a href={`${candidate.html_url}`} target="_blank" rel="noreferrer">View Profile</a>
            </div>
            <FcCancel
            style={{ fontSize: '50px', cursor: 'pointer' }}
            onClick={() => Choice?.(false)}/>
            <FcPlus
            style={{ fontSize: '50px', cursor: 'pointer' }}
            onClick={() => Choice?.(true)}/>
        </div>
    );
};

export default CandCard;