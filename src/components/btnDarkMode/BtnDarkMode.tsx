import React, {useEffect, useRef, useState} from 'react';
import sun from "./sun.svg";
import moon from "./moon.svg";
import './btnDarkMode.css'
import {useLocalStorage} from "../../utils/useLocalStorage";



export const BtnDarkMode = () => {
    // const [darkMode, setDarkMode] = useState('light');
    const [darkMode,setDarkMode] = useLocalStorage('darkMode','light')
    const btnRef = useRef<HTMLButtonElement>(null);
    useEffect(() => {
      if (darkMode === 'dark') {
          document.body.classList.add('dark');
          btnRef.current?.classList.add('dark-mode-btn--active');
      } else {
          document.body.classList.remove('dark');
          btnRef.current?.classList.remove('dark-mode-btn--active');
      }
    }, [darkMode]);

    const toogleDarkMode = () => {
        setDarkMode((currentValue:string)=>{
            return currentValue === 'light' ? 'dark' : 'light';
        })
    }

    return (
        <button ref={btnRef} className="dark-mode-btn" onClick={toogleDarkMode} >
            <img src={sun} alt="Light mode" className="dark-mode-btn__icon"/>
            <img src={moon} alt="Dark mode" className="dark-mode-btn__icon"/>
        </button>
    );
};

