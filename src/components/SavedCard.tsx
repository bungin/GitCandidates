import type { Candidate } from "../interfaces/Candidate.interface";
import "../index.css";

interface SavedCardProps {
  candidate: Candidate;
}

const SavedCard = ({ candidate }: SavedCardProps) => {
  return (
    <>
      <tr>
        <td>
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
        </td>
        <td>
          <h2>{candidate.login}</h2>
        </td>
        <td>
          <h2>{candidate.name}</h2>
        </td>
        <td>
          {!candidate.bio ? <p>No bio available</p> : <p>{candidate.bio}</p>}
        </td>
      </tr>
    </>
  );
};

export default SavedCard;
