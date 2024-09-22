import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import CandCard from '../components/CandCard';


const CandidateSearch = () => {
  return (
  <>
    <h1>CandidateSearch</h1>
    <CandCard/>
  </>
  );
};
searchGithub();
searchGithubUser('octocat');
export default CandidateSearch;
