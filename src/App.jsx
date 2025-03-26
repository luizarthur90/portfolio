import './App.css';
import Section2 from './components/Section2/Section2';
import Heading from './components/heading/heading';
import Menu from './components/menu/menu';
import Contact from './components/Contact/Contact';
import BackgroundVideo from './components/backgroundVideo/backgroundVideo';




function App() {
  return (
    <body>
      {/* <BackgroundVideo /> */}
      <div className=".app-components">
        <div className="app-container heading-background">
          <Menu />
          <Heading />
        </div>
        <Section2 className='background-caseStudies h4-global-caseStudies' />
        <Contact />
      </div>
    </body>
  );
}

export default App;
