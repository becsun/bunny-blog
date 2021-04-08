import React from 'react'
import { Link } from 'react-router-dom'
import ImageListItemBar from '@material-ui/core/ImageListItemBar'
import IconButton from '@material-ui/core/IconButton'
import InfoIcon from '@material-ui/icons/Info'
// import ImageList from '@material-ui/core/ImageList'
import ImageListItem from '@material-ui/core/ImageListItem'
// import ListSubheader from '@material-ui/core/ListSubheader'



export default function BunnyBreedCard({ image, name, origin,lifespan }) {
  return (
    <Link to={'/bunnies'}>
      <ImageListItem>
        <img
          srcSet={`${image}?w=248&fit=crop&auto=format 1x,
                ${image}?w=248&fit=crop&auto=format&dpr=2 2x`}
          alt={name}
          loading="lazy"
        />
        <ImageListItemBar
          title={name}
          subtitle={origin}
          actionIcon={
            <IconButton
              sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
              aria-label={`info about ${lifespan}`}
            >
              <InfoIcon />
            </IconButton>
          }
        />
      </ImageListItem>
      {/* </ImageList> */}
    </Link>
  )
}

