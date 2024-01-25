import React, {useState} from 'react'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import {useSelector} from 'react-redux'
import Button from '@mui/material/Button'

const ContactSubComponent = () => {

    const [img, setImg] = useState("https://www.shutterstock.com/image-vector/vector-flat-illustration-grayscale-avatar-600nw-2281862025.jpg")
    const id = useSelector(state => state.userReducer.id)

    const [styles, setStyles] = useState({
        paper : {
            display : "flex", flexWrap : "wrap", justifyContent : "center", padding : "20px"
        },
        text : {
            fontSize : "40px"
        },
        displayDiv : {
            margin : "5px"
        },
        media : {
            borderRadius : "50%", width : "70%", margin : "5%"
        }
    })

    let emails = useSelector(state => state.userReducer.emails)
    let place = useSelector(state => state.userReducer.place)
    let name = useSelector(state => state.userReducer.fname + " " + state.userReducer.lname)
    let mobile = useSelector(state => state.userReducer.mobile)

    let copyText = (email) => {
        navigator.clipboard.writeText(email)
    }

  return (
    <Paper style={styles.paper}>
        <Typography style={styles.text} variant="body1" color="initial">Contact</Typography>
        <div>
            <div style={styles.displayDiv}><b>Name : </b>{name}</div>
            <div style={styles.displayDiv}><b>Email : </b>{emails.map(email => <div>{email} <Button style={{fontSize : "10px"}} variant="text" color="primary" onClick={() => copyText(email)} >copy</Button></div>)}</div>
            <div style={styles.displayDiv}><b>Mobile No. : </b>{mobile} <Button style={{fontSize : "10px"}} variant="text" color="primary" onClick={() => copyText(mobile)} >copy</Button></div>
            <div style={styles.displayDiv}><b>Place : </b>{place}</div>
            <div style={styles.displayDiv}>
                <img style={styles.media} src={id === -1 ? img : "http://localhost:8482/image/" + id} alt="" />
            </div>
        </div>
    </Paper>
  )
}

export default ContactSubComponent
