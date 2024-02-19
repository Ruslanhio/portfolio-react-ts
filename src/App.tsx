import React from 'react';
import './styles/main.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Navbar} from "./components/navbar/Navbar";
import {Footer} from "./components/footer/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";
import {projects} from './helpers/projectsList'
import {ProjectPage} from "./pages/ProjectPage";
import {ScrollToTop} from "./utils/scrollToTop";




function App() {
    return (
        <div className="App">
            <Router>
                <ScrollToTop/>
            <Navbar/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/projects/:id' element={<ProjectPage/>}/>
                    <Route path='/contacts' element={<Contacts/>}/>
                    <Route path='/projects' element={<Projects projects={projects}/>}/>
                </Routes>
            <Footer/>
            </Router>
        </div>
    );
}

export default App;
