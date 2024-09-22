// DO: Create an interface for the Candidate objects returned by the API
interface Candidate {
    id: number;
    login: string | null;
    name: string | null;
    html_url: string | null;
    email: string | null;
    avatar_url: string | null;
    company: string | null;
    bio: string | null;
    location: string | null;
}

export default Candidate;