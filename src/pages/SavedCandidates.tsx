import SavedCard from "../components/SavedCard";
import { Candidate } from "../interfaces/Candidate.interface";
import "../index.css";

const SavedCandidates = () => {
  const candData = JSON.parse(
    localStorage.getItem("selectedCandidates") || "[]"
  );
  console.log(candData);

  const renderSavedCards = () => {
    return candData.map((candidate: Candidate, index: number) => (
      <SavedCard key={index} candidate={candidate} />
    ));
  };


  return (
    <>
      <h1>Potential Candidates</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Username</th>
            <th>Name</th>
            <th>Bio</th>
          </tr>
        </thead>
        <tbody>{renderSavedCards()}</tbody>
      </table>
    </>
  );
};

export default SavedCandidates;
