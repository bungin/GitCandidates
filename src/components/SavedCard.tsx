import type { Candidate } from "../interfaces/Candidate.interface";
import "../index.css";

interface SavedCardProps {
  candidate: Candidate;
}

const SavedCard = ({ candidate }: SavedCardProps) => {
  return (
    <>                   
      <div className="">
        <div>
          {candidate?.avatar_url ? (
            <img
              src={`${candidate.avatar_url}`}
              alt={`${candidate.name} profile picture`}
              style={{ width: "75px", height: "75px" }}
            />
          ) : (
            <img
              src={"https://placehold.co/75x75"}
              alt={"placeholder profile picture"}
              style={{ width: "75px", height: "75px" }}
            />
          )}
        </div>
        <div>
          <h2>{candidate.login}</h2>
          <h2>{candidate.name}</h2>
          <a href={`${candidate.html_url}`} target="_blank" rel="noreferrer">
            View Profile
          </a>
        </div>
        <div style={{}} >
        {!candidate.bio ? <p>No bio available</p> : <p>{candidate.bio}</p>}
        </div>
      </div>
    </>
  );
};

export default SavedCard;
