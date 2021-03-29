import './App.css';
import About from './components/About/About';
// import Home from './components/Home/Home';
import Projects from './components/Project/Projects';
import Experience from './components/Work Experience/Experience';
import NavBar from './components/NavBar';
// import Error from './components/Error';
import {Route, Switch } from 'react-router-dom';
import Intro from './components/Intro/Intro';
import Skills from './components/Skills/Skills';
import Footer from './components/Footer';




function App() {
  return (
    <div className="App">
      <NavBar />
      <Intro />
      <Skills />
      <About />


      <Switch>
                {/* <Route exact path="/" component={Home} exact />
                <Route exact path="/home" component={About} /> */}
                {/* <Route exact path="/projects" component={Projects} /> */}
                {/* <Route path="/education" component={Education} />
                <Route exact path="/projects" component={Projects} /> */}
                <Route exact path="/experience" component={Experience} />

                {/* <Route  component={Error} /> */}

            </Switch> 



      <Projects />
      <Footer />

    </div>
  );
}

export default App;
