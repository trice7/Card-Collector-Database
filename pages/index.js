import LandingArea from '../components/LandingArea';
import { useAuth } from '../utils/context/authContext';

function Home() {
  const { user } = useAuth();

  return (
    <div>
      <div
        className="text-center d-flex flex-column justify-content-center align-content-center landing"
        style={{
          height: '90vh',
          padding: '30px',
          maxWidth: '400px',
          margin: '0 auto',
        }}
      >
        <h1>Hello {user.displayName}! </h1>
        <LandingArea />
      </div>
    </div>
  );
}

export default Home;
