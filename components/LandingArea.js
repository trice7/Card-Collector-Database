import Link from 'next/link';

const LandingArea = () => (
  <div>
    <h3>Welcome to the Card Collectors Database!</h3>
    <p>To view import disclaimers about price data,
      <Link href="/disclaimer">
        please click here.
      </Link>
    </p>
  </div>
);

export default LandingArea;
