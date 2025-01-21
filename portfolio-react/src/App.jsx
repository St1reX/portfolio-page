import './App.css';
import Header from './components/Header/Header';
import AnimatedBanner from './components/AnimatedBanner/AnimatedBanner';
import SkillsSection from './components/SkillsSection/SkillsSection';
import ProjectsSection from './components/ProjectsSection/ProjectsSection';
import Footer from './components/Footer/Footer';
import LifeStorySection from './components/lifeStorySection/lifeStorySections';
import useAnimateDocumentTitle from './hooks/useAnimateDocumentTitle';

function App() {
  useAnimateDocumentTitle();

  return (
    <>
      <Header />
      <AnimatedBanner />
      <SkillsSection />
      <ProjectsSection />
      <LifeStorySection />
      <Footer />
      <img
        className="h-32 fixed bottom-0 right-0 -mb-4 cursor-pointer"
        src="./assets/svg/undraw_dog_jfxm.svg"
        alt="Cat Picture"
        onClick={() => {
          window.location.href = 'https://www.happydoggo.com';
        }}
      />
    </>
  );
}

export default App;
