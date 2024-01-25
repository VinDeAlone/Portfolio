import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import HeaderComponent from './HeaderComponent'
import {useSelector} from 'react-redux'
import HomeComponent from './Main/HomeComponent'
import AboutComponent from './Main/AboutComponent'
import ProjectsComponent from './Main/ProjectsComponent'
import ContactsComponent from './Main/ContactsComponent'
import RouterComponent from './MiscComponents/Router/RouterComponent'
import SkillsComponent from './Main/SkillsComponent'


const MainComponents = () => {

    const [styles, setStyles] = useState({
        skipDiv : {
            height: "60px"
        }
    })

    return (
        <div>
            
            <HeaderComponent/>
            <div style={styles.skipDiv}></div>
            <RouterComponent 
            urls={["/","/about","/skills","/project","/contact"]} 
            elements={[<HomeComponent/>,<AboutComponent/>,<SkillsComponent/>,<ProjectsComponent/>,<ContactsComponent/>]}
            />
        </div>
    )
}

export default MainComponents
