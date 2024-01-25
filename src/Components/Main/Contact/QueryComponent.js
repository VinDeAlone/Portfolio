import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

const QueryComponent = () => {

    const [query, setQuery] = useState({
        name: "",
        email: "",
        message: ""
    })

    const [styles, setStyles] = useState({
        form : {
            display : "flex", flexWrap : "wrap", justifyContent : "center", padding : "10px"
        },
        text : {
            fontSize : "40px"
        },
        input : {
            margin : "5px"
        }
    })

    let clearContents = () => {
        setQuery({
            name: "",
            email: "",
            message: ""
        })
    }

    let submitQuery = () => {
        clearContents()
    }

    return (
        <Paper>
            <form style={styles.form}>
                <Typography style={styles.text} variant="body1" color="initial">Query</Typography>
                <TextField style={styles.input} id="name" label="name" value={query.name} onChange={(e) => setQuery({ ...query, name: e.target.value })} fullWidth />
                <TextField style={styles.input} id="email" label="email" value={query.email} onChange={(e) => setQuery({ ...query, email: e.target.value })} fullWidth />
                <TextField style={styles.input} id="message" label="message" value={query.message} onChange={(e) => setQuery({ ...query, message: e.target.value })} fullWidth />
                <Button style={styles.input} fullWidth size='large' variant="contained" color="primary" onClick={submitQuery}>Submit</Button>
                <Button style={styles.input} fullWidth size='small' variant="contained" color="inherit" onClick={clearContents}>Clear</Button>
            </form>
        </Paper>
    )
}

export default QueryComponent
