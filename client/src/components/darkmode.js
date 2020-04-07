import LocalStorage from './LocalStorage.js'
import {useEffect} from 'react';

const DarkMode = (mode) =>{
    const [darkMode, setDarkMode] =LocalStorage(mode)
    useEffect(()=>{
        let htmlBody = document.querySelector('body')
        if(darkMode){
            htmlBody.className = "dark-mode";
        }
        else{
            htmlBody.removeAttribute("class")
        }
    },[darkMode])
    return [darkMode, setDarkMode];
};

export default DarkMode;