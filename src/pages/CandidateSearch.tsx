import { useState, useEffect, useCallback, useMemo} from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import { Candidate } from '../interfaces/Candidate.interface';
import CandCard from '../components/CandCard';


const CandidateSearch = () => {
  const [results, setResults] = useState<Candidate[]>([]);
  const [candidate, setCandidate] = useState<Candidate>({
    id: null,
    login: null,
    name: null,
    html_url: null,
    email: null,
    avatar_url: null,
    company: null,
    bio: null,
    location: null,
  });

  
  const [index, setIndex] = useState<number>(0);
  

  function makeDecision(isSelected: boolean) {
    if (isSelected) {
      const currentSelection = JSON.parse(localStorage.getItem('selectedCandidates') || '[]');
      currentSelection.push((candidate) as Candidate);
      localStorage.setItem('selectedCandidates', JSON.stringify(currentSelection));
    }
    if (index < results.length - 1) {
      setIndex(index + 1);
      searchUser(results[index + 1].login || '');

    } else {
      setIndex(0);
      searchAllUsers();
    }//check for 404 response then refetch or index++
  };

  const searchUser = useCallback(async (login: string) => {
    const data = await searchGithubUser(login);
    setCandidate(data);
  }, []);

  const searchAllUsers = useCallback(async () => {
    const data = await searchGithub();
    console.log(data, index);
    setResults(data);
    await searchUser(data[index].login);
  }, []);

  useEffect(() => {
    searchAllUsers();
  }, []);



  return (<>
  <h1>CandidateSearch</h1>
  <CandCard candidate={candidate} makeDecision={makeDecision} />
  </>
)
};

export default CandidateSearch;
