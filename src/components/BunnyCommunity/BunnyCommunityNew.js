import React from 'react'

import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'
import { createBunnyPic } from '../lib/api'

function BunnyCommunityNew() {
  const bunnyPic = {
    formData: {
      name: '',
      image: '',
    },
    errors: '',
  }
  const [state, setState] = React.useState(bunnyPic)

  const handleChange = e => {
    const formData = { ...state.formData, [e.target.name]: e.target.value }
    const errors = { ...state.errors, [e.target.name]: '' }
    setState({ formData, errors })
  }

  const handleSubmit = async event => {
    event.prevenyDefault()
    try {
      const res = await createBunnyPic( state.formData)

      console.log(res)
    } catch (err) {
      console.log(err.response.data)
    }
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
      <form onSubmit={handleSubmit}>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
          <TextField
            id="input-with-icon-grid"
            label="Bunny Name"
            onChange={handleChange}
            name="name"
            value={state.name} />
          <TextField
            id="input-with-icon-grid"
            label="Image Url"
            name="image"
            onChange={handleChange}
            value={state.image} />
          <Button
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

