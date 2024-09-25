import type { Candidate } from "../interfaces/Candidate.interface";
import "../index.css";

interface SavedCardProps {
  candidate: Candidate;
}

const SavedCard = ({ candidate }: SavedCardProps) => {
  return (// probably cant use candidate.blah. will need to pull from local storage.
    <>                   
      <div>
        <div>
          {candidate?.avatar_url ? (
            <img
              src={`${candidate.avatar_url}`}
              alt={`${candidate.name} profile picture`}
              style={{ width: "50px", height: "50px" }}
            />
          ) : (
            <img
              src={"https://placehold.co/75x75"}
              alt={"placeholder profile picture"}
              style={{ width: "50px", height: "50px" }}
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
          <p>{candidate.bio} </p>
        </div>
      </div>
    </>
  );
};

export default SavedCard;
