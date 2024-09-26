import SavedCard from "../components/SavedCard";
import { useState, useEffect, useCallback} from 'react';
import { Candidate } from "../interfaces/Candidate.interface";
import '../index.css';

//copilot shit for study
// const sampleCandidate: Candidate = {
//   id: 1,
//   name: "John Doe",
//   position: "Software Engineer",
//   // Add other properties as required by the Candidate interface
// };

// return (
//   <>
//     <h1>Potential Candidates</h1>
//     <SavedCard candidate={sampleCandidate}/>



const SavedCandidates = () => {
  
  const [index, setIndex] = useState<number>(0);
  const candData = JSON.parse(localStorage.getItem('selectedCandidates') || '[]');
  console.log(candData)
  
  const renderSavedCards = () => {
    return candData.map((candidate: Candidate, index: number) => (
      <SavedCard key={index} candidate={candidate} />
      //increment index +1 for each render
    ));
  };

  return (
    <>
      <h1>Potential Candidates</h1>
      {renderSavedCards()}
    </>
  );
};

export default SavedCandidates;

