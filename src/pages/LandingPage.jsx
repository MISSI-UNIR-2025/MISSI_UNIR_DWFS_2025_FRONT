import LandingBackground from '../components/landing/LandingBackground';
import LandingContent from '../components/landing/LandingContent';
import LandingActions from '../components/landing/LandingActions';
import { useCountdownRedirect } from '../hooks/useCountdownRedirect';

const LandingPage = () => {
  const { count, goNow } = useCountdownRedirect(5, '/home');

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-linear-to-br from-indigo-50 via-white to-purple-50 overflow-hidden relative">
      <LandingBackground />

      <div className="text-center z-10 p-8 max-w-2xl mx-auto">
        <LandingContent />
        <LandingActions seconds={count} onEnter={goNow} />
      </div>
    </div>
  );
};

export default LandingPage;
