import React, { useEffect, useState } from 'react'
import Paper from '@mui/material/Paper'
import FileBase from 'react-file-base64'
import {useSelector} from 'react-redux'

const ProfileComponent = () => {

    const [img, setImg] = useState("https://www.shutterstock.com/image-vector/vector-flat-illustration-grayscale-avatar-600nw-2281862025.jpg")
    const id = useSelector(state => state.userReducer.id)

    const [styles, setStyles] = useState({
        media : {
            marginTop : "100px", height: "400px", border: "2px solid rgb(255, 99, 71)", borderRadius: "50%", width: "400px"
        }
    })

    return (
        <>
        <img style={styles.media} src={id == -1 ? img : "http://localhost:8482/image/" + id} alt="user" />
        </>
    )
}

export default ProfileComponent
