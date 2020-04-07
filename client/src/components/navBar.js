import React from 'react'
import {Switch,SwitchInput,Slider} from './styles.js'
import DarkMode from './darkmode'
const Navbar = (props) =>{
    const [darkMode,setDarkMode]= DarkMode()
const tolggleMode = e =>{
    
    setDarkMode(!darkMode)
}

    return(
        <nav>
            <h1>Women's World Cup</h1>
            <Switch>
                <SwitchInput type="checkbox" />
                <Slider onClick={tolggleMode}/>
            </Switch>
        </nav>
    )
}

export default Navbar;