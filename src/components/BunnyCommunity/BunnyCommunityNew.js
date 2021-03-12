import React from 'react'

import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'
// import { createBunnyPic } from '../lib/api'

function BunnyCommunityNew() {
  const bunnyPic = {
    formData: {
      name: '',
      image: '',
    },
    errors: '',
  }
  const [state, setState] = React.useState(bunnyPic)

  const handleChange = event => {
    const formData = { ...state.formData, [event.target.name]: event.target.value }
    const errors = { ...state.errors, [event.target.name]: '' }
    setState({ formData, errors })
  }

  const handleSubmit = event => {
    event.preventDefault()
    console.log('hi')
    console.log('submit my form', state.formData )
  }

  const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
  }))

  const classes = useStyles()

  console.log('state', state.formData)

  return (
    
    <div className={classes.margin}>
      <form 
        onClick={handleSubmit}
        noValidate>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
          <TextField
            id="input-with-icon-grid"
            label="Bunny Name"
            required
            onChange={handleChange}
            name="name"
            value={state.name} />
          <TextField
            id="input-with-icon-grid"
            label="Image Url"
            required
            name="image"
            onChange={handleChange}
            value={state.image} />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            component="span"
          >
            Upload
          </Button>
        </Grid>
      </form>  
    </div>
 
    
  )


}

export default BunnyCommunityNew

