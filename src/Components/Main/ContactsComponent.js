import React from 'react'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import QueryComponent from './Contact/QueryComponent'
import ContactSubComponent from './Contact/ContactSubComponent'

const ContactsComponent = () => {

  return (
    <div>
      <Container maxWidth="lg">
        <Grid container spacing={3} alignContent="stretch" justifyContent="space-between">
          <Grid item xs={12} sm={6}>
            <QueryComponent/>
          </Grid>
          <Grid item xs={12} sm={5}>
            <ContactSubComponent/>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default ContactsComponent
