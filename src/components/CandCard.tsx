import type { Candidate } from "../interfaces/Candidate.interface";
import { FcCancel, FcPlus } from "react-icons/fc";
import '../index.css';

interface CandCardProps {
    candidate: Candidate;
    makeDecision: (isSelected: boolean) => void;
}

const CandCard = ({ candidate, makeDecision }: CandCardProps) => {



    return (
        <div className="cardBody">
            {candidate?.avatar_url ? (
                <img
                    src={`${candidate.avatar_url}`}
                    alt={`${candidate.name} profile picture`} />
            ) : (
                <img
                    src={'https://placehold.co/600x400'}
                    alt={'placeholder profile picture'}
                    style={{ width: '300px' }} />
            )}
            <div className="">
                <h2>{candidate.name}</h2>
                <p>{candidate.bio}</p>
                <a href={`${candidate.html_url}`} target="_blank" rel="noreferrer">View Profile</a>
            </div>
            <div className="cardButtons">
                <FcCancel
                    style={{ fontSize: '50px', cursor: 'pointer' }}
                    onClick={() => makeDecision(false)} />
                <FcPlus
                    style={{ fontSize: '50px', cursor: 'pointer' }}
                    onClick={() => makeDecision(true)} />
            </div>
        </div>
    );
};

export default CandCard;