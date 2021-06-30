import React from 'react'
import './Navbar.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


const Navbar = () => {
    return (
        <Router>
        <div>
        <nav className="navbar">
            <div className="brand-title"><Link to="/">🚀 AG</Link></div>
            <a href="#" className="toggle-button">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </a>
            <div className="navbar-links">
                <ul>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/projects">Projects</Link>
                    </li>
                    <li>
                        <Link to="/skills">Skills</Link>
                    </li>
                </ul>
            </div>
        </nav>
            <Switch>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/skills">
                    <Skills />
                </Route>
                <Route path="/Projects">
                    <Projects />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
           </Switch>
         </div>
       </Router>

    );
}


function Home() {
    return <h2>Home</h2>;
  }
  
  function About() {
    return <h2>About</h2>;
  }
  
  function Projects() {
    return <h2>Projects</h2>;
  }
  function Skills() {
    return <h2>Skills</h2>;
  }

export default Navbar
