import './App.css';
import Section2 from './components/Section2/Section2';
import Heading from './components/heading/heading';
import Menu from './components/menu/menu';


function App() {
  return (
    <div className=".app-components">
      <div className="app-container heading-background">
        <Menu />
        <Heading />
      </div>
      <body>
        <Section2 className='background-caseStudies h4-global-caseStudies' />
      </body>
    </div>
  );
}

export default App;
