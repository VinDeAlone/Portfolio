import React, { useState } from 'react'
import Button from '@mui/material/Button'
import { useDispatch } from 'react-redux'
import { setURLPath } from '../Redux/Actions/URLPath'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import LinkComponent from './MiscComponents/Router/LinkComponent'






const HeaderComponent = () => {

    let dispatch = useDispatch()

    const [styles, setStyles] = useState({
        button: {
            color: "black"
        },
        navbar: {
            backgroundColor: "rgb(255, 99, 71)"
        },
        navLink: {
            color: "rgb(68, 69, 68)",
            fontSize: "20px"
        }
    })

    return (
        <div>
            <AppBar position="fixed" style={styles.navbar}>
                <Typography variant="body1" color="initial">
                    <LinkComponent navigateTo="/" text="Vinayak Jadhav" styles={styles.navLink} />
                    <LinkComponent navigateTo="/" text="home" styles={styles.button} />
                    <LinkComponent navigateTo="/about" text="about" styles={styles.button} />
                    <LinkComponent navigateTo="/skills" text="skills" styles={styles.button} />
                    <LinkComponent navigateTo="/project" text="project" styles={styles.button} />
                    <LinkComponent navigateTo="/contact" text="contact" styles={styles.button} />
                </Typography>
            </AppBar>
        </div>
    )
}

export default HeaderComponent
