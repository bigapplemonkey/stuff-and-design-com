import Hero from '../components/Hero';
import LandingFooter from '../components/LandingFooter';
import Navigation from '../components/Navigation';

const Home = () => {
  return (
    <div className="container full-height">
      <Navigation enableStatus />
      <Hero />
      <LandingFooter />
    </div>
  );
};
export default Home;
