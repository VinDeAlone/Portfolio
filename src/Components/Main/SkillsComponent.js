import React, { useState } from 'react'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { useSelector } from 'react-redux'




const SkillsComponent = () => {

    const [skillUrlMap, setSkillUrlMap] = useState([
        { skill: "skill", url: "https://media.licdn.com/dms/image/C4D12AQEZ4wMQsmhTMQ/article-cover_image-shrink_600_2000/0/1633350464916?e=2147483647&v=beta&t=j-UnZwCDbXewcsdQvLwRcmGKAk4R4ms-yEf-B_97O1Q" },
        { skill: "java", url: "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/1200px-Java_programming_language_logo.svg.png" },
        { skill: "javascript", url: "https://w7.pngwing.com/pngs/640/199/png-transparent-javascript-logo-html-javascript-logo-angle-text-rectangle-thumbnail.png" },
        { skill: "react", url: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" },
        { skill: "spring boot", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuOIR8TBB2mwOB3UR3Pon0gineKJrRLEYHT-vaZQlITg&s" },
        { skill: "jwtoken", url: "https://i.pinimg.com/474x/09/96/e0/0996e0223646744e53d78ba90131be07.jpg" },
        { skill: "redux", url: "https://cdn.iconscout.com/icon/free/png-256/free-redux-3445829-2878755.png" },
        { skill: "html", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLq-hxqesq0iiXOuuDGk1lMTmGU-oJFoEjG-76o062iA&s" },
        { skill: "css", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQDkT9a_H_yF1MgXw4pr3AW1alzw9ts8mUZmKWQk8nqA&s" },
        { skill: "tailwind", url: "https://w7.pngwing.com/pngs/293/485/png-transparent-tailwind-css-hd-logo-thumbnail.png" }
    ])

    const [styles, setStyles] = useState({
        paper: {
            marginLeft: "100px", marginRight: "100px", position: "relative", display: "flex", justifyContent: "center", alignItems: "center"
        },
        gridContainer: {
            marginLeft: "100px", marginRight: "100px", display: "flex", justifyContent: "center", alignItems: "center"
        },
        cardMedia: {
            height: "100px", width: "100px"
        }
    })

    const skills = useSelector(state => state.userReducer.skills)
    const id = useSelector(state => state.userReducer.id)

    return (
        <div>
            <Container maxWidth="lg">
                <Paper style={styles.paper}>
                    <Grid style={styles.gridContainer} container spacing={1}>
                        {skills.map(e => {
                            let count = -1
                            let url = skillUrlMap.map((skillUrls, i) => {
                                if (skillUrls.skill === e.toLowerCase()) {
                                    count = i
                                    return skillUrls.url
                                } else {
                                    return ""
                                }
                            })[count]
                            return <Grid item >
                                <Card>
                                    <CardMedia style={styles.cardMedia} title="any" image={
                                        url ? url : skillUrlMap[0].url
                                    } />
                                    <Typography variant="body1" color="initial">{e}</Typography>
                                </Card>
                            </Grid>
                        }
                        )}
                    </Grid>
                </Paper>
            </Container>
        </div>
    )
}

export default SkillsComponent
