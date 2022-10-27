import './App.css';
import Services from './Component/Services';
import Navigator from './Component/Navigator';
import Header from './Component/Header';
import Faq from './Component/Faq';
import Footer from './Component/Footer'

function App() {
  return (
    <div className="App">
      <div id="appMountPoint">
        <div className="basicLayout">
            <div className="netflix-sans-font-loaded">
                <div className="our-story-desktop-framework">
                    <div className="our-story-container">
                        <Header />
                        <div className="our-story-cards">
                            <Navigator />
                            <Services />
                            <Faq />
                        </div>
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
