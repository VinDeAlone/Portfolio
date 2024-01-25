import React, { useState } from 'react'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import { useSelector } from 'react-redux'
import Button from '@mui/material/Button'
import CardMedia from '@mui/material/CardMedia'
import { BACKEND_URL } from '../../Redux/Constants'



const AboutComponent = () => {

  const [img, setImg] = useState("https://www.shutterstock.com/image-vector/vector-flat-illustration-grayscale-avatar-600nw-2281862025.jpg")
  const id = useSelector(state => state.userReducer.id)
  const name = useSelector(state => state.userReducer.fname)
  const designation = useSelector(state => state.userReducer.designations.split(",")[0])
  const about = useSelector(state => state.userReducer.about)
  const emails = useSelector(state => state.userReducer.emails)
  const place = useSelector(state => state.userReducer.place)

  const [styles, setStyles] = useState({
    cardMedia : {
      marginLeft: "100px", marginTop: "70px", height: "400px", width: "400px"
    },
    paper : {
      marginTop: "30px", padding : "20px"
    }
  })

  let copyText = (email) => {
    navigator.clipboard.writeText(email)
  }

  return (
    <div>
      <Container maxWidth="lg">
        <Grid container spacing={0} alignContent="stretch" justifyContent="space-between">
          <Grid item xs={12} sm={5}>
            <CardMedia title="" style={styles.cardMedia} image={id == -1 ? img : BACKEND_URL + "/image/" + id} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper style={styles.paper}>
              <div style={{ fontSize: "40px" }}><b>I am {name}</b></div>
              <div style={{ fontSize: "25px" }}><b>{designation}</b></div>
              <p>{about}</p>
              <div>
                <span><b>Emails : </b></span><span>
                  { emails.map(email => <div>{email} <Button variant="text" onClick={()=>copyText(email)}>
                    <div style={{fontSize : "10px", color : "black"}}>copy</div>
                  </Button></div>) }
                </span>
              </div>
              <div>
                <span><b>Place : </b></span><span>
                  { place }
                </span>
              </div>
              <a href={BACKEND_URL + "/resume/" + id}><Button style={{marginTop : "10px"}} variant="contained" color="primary">
                Resume
              </Button></a>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default AboutComponent
