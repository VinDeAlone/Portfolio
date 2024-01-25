import React, { useCallback, useEffect, useState } from 'react'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import LinkComponent from '../../MiscComponents/Router/LinkComponent'
import {useSelector} from 'react-redux'


const InfoComponent = () => {

    let user = useSelector(state => state.userReducer)

    const [urlMap, setUrlMap] = useState([
        { logoName: "gitHub", url: "https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" },
        { logoName: "linkedIn", url: "https://i.pinimg.com/originals/92/d1/db/92d1db1521d374335498624cc95e9554.png" },
        { logoName: "instagram", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb4WsD4lZnRVh6_Fb1qCgxhan509P4ksk7tGJwMSLiqyk91ItJub6UiLP5rkAXgcfIEAo&usqp=CAU" }
    ])

    const [styles, setStyles] = useState({
        paper : {
            marginTop : "100px", height: "500px", width: "700px", padding: "30px"
        },
        highlight1 : {
            marginLeft: "20px", marginRight: "20px", fontSize: "40px"
        },
        highlight2 : {
            color: "red"
        },
        highlight3 : {
            marginTop: "20px", fontSize: "25px"
        },
        highlight4 : {
            color: "rgb(255, 165, 0)"
        },
        link : {
            margin : "20px", color: "black", backgroundColor: "rgb(106, 90, 205)"
        },
        media : {
            margin: "4px", fontSize: "10px", height: "40px", width: "40px", border: "2px solid red", borderRadius: "50%"
        }
    })

    const [i, setI] = useState(0)
    const [designation, setDesignation] = useState()

    useEffect(() => {
        shuffleDesignation()
    }, [designation])

    let shuffleDesignation = useCallback(() => {
        setTimeout(() => {
            if (i >= user.designations.split(",").length) {
                setI(-1)
            }
            setI(prev => prev + 1)
            setDesignation(user.designations.split(",")[i])
        }, 2000);
    }, [designation])

    return (
        <Paper style={styles.paper}>
            <Grid>
                <b>
                    <div style={styles.highlight1}>
                        Hi There,
                    </div>
                    <div style={styles.highlight1}>
                        I'm <span style={styles.highlight2}>{user.fname}</span> <span style={styles.highlight2}>{user.lname}</span>
                    </div>
                    <div style={styles.highlight3} >
                        I Am Into <span style={styles.highlight4}>{designation}</span>
                    </div>
                </b>
                <LinkComponent styles={styles.link} text="About me &#10148;" navigateTo="/about" />
                <div>
                    {user.profileUrls.map(e => {
                        let count = -1;
                        return <a href={e.url}><img style={styles.media} src={
                            urlMap.map((info,i) => {
                                if(info.logoName === e.logoName){
                                    count = i
                                    return info.url
                                }else{
                                    return "https://e7.pngegg.com/pngimages/209/851/png-clipart-social-media-globe-illustration-social-media-marketing-youth-social-media-company-text.png"
                                }
                            })[count]
                        } /></a>;
                    })}
                </div>
                {console.log(user)}
            </Grid>
        </Paper>
    )
}

export default InfoComponent