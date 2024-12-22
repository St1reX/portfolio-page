import './App.css';
import Header from './components/Header/Header';
import AnimatedBanner from './components/AnimatedBanner/AnimatedBanner';
import SkillsSection from './components/SkillsSection/SkillsSection';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <AnimatedBanner />
      <SkillsSection />
      <Footer />
      <img
        className="h-32 fixed bottom-0 right-0"
        src="./assets/svg/undraw_cat_epte.svg"
        alt="Cat Picture"
      />
    </>
  );
}

export default App;
