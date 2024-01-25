import React from 'react'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import ProfileComponent from './Home/ProfileComponent'
import InfoComponent from './Home/InfoComponent'

const HomeComponent = () => {
  return (
    <div>
      <Container maxWidth="lg">
        <Grid container spacing={3} alignItems='stretch' justifyContent='space-between'>
          <Grid item xs={12} sm={7}>
            <InfoComponent />
          </Grid>
          <Grid item xs={12} sm={4}>
            <ProfileComponent />
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default HomeComponent
