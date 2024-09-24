import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const currentpage = useLocation().pathname;

  return (
    <nav className={'nav'}>
      <ul className={'nav'}>
        <li className={'nav-item'}>
          <Link
            to="/"
            className={currentpage === '/' ? 'nav-link active' : 'nav-link'}>
            Home</Link>
        </li>
        <li className={'nav-item'}>
          <Link
            to="SavedCandidates"
            className={currentpage === '/SavedCandidates' ? 'nav-link active' : 'nav-link'}>
            Saved Candidates</Link>
        </li>
      </ul>
    </nav>
  )
};

export default Nav;
