import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl">Welcome to BetCheckr HomePage</h1>
      <Link to="/bet/1" className="text-blue-500">Go to Bet 1</Link>
    </div>
  );
}

export default HomePage;
