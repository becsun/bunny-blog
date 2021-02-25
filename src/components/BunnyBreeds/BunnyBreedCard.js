import React from 'react'
import { Link } from 'react-router-dom'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const BunnyBreedCard = ({ name, lifeSpan, origin, weight, furType, image, _id }) => (
  <div>
    <Link to={`/bunnies/${_id}`}>
      <Card width="200">
        <CardActionArea>
          <CardMedia
            component="img"
            alt={name}
            height="160"
            image={image}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {lifeSpan}
              {origin}
              {weight}
              {furType}  
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Link>
  </div>
)
  
export default BunnyBreedCard