import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const currentpage = useLocation().pathname;

  return (
    <nav>
      <ul>
        <li>
          <h2>
            <Link 
            to="/"
            className={currentpage === '/' ? 'nav-link active' : 'nav-link'}>
              Home</Link>
          </h2>
        </li>
        <li>
          <h2>
            <Link 
            to="SavedCandidates"
            className={currentpage === '/SavedCandidates' ? 'nav-link active' : 'nav-link'}>
              Saved Candidates</Link>
          </h2>
        </li>
      </ul>
    </nav>
  )
};

export default Nav;
