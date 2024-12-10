import './App.css';
import Header from './components/Header/Header';
import AnimatedBanner from './components/AnimatedBanner/AnimatedBanner';
import CatSVG from './assets/svg/undraw_cat_epte.svg';

function App() {
  return (
    <>
      <Header />
      <AnimatedBanner />
      <img
        className="h-32 fixed bottom-0 right-0"
        src={CatSVG}
        alt="Cat Picture"
      />
    </>
  );
}

export default App;
