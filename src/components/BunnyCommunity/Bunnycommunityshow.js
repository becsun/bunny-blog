import React from 'react'
import { getSingleBunnyPic, deleteBunnyPic } from '../lib/api'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

class BunnyCommunityShow extends React.Component {
    state = {
      bunnyPic: null,
    }

    async componentDidMount() {
      const bunnyPicID = this.props.match.params.id
      try {
        const res = await getSingleBunnyPic(bunnyPicID)
        this.setState({ bunnyPic: res.data })
        console.log(bunnyPicID)
      } catch (err) {
        console.log(err)
        this.props.history.push('/notfound')
      }
    }

    handleDelete = async () => {
      const bunnyPicID = this.props.match.params.id
      try {
        await deleteBunnyPic(bunnyPicID)
        this.props.history.push('/bunnycommunity')
      } catch (err) {
        console.log(err.response.data)
      }
    }
  

    render(){
      const { bunnyPic } = this.state
      if (!bunnyPic) return null

      return (
        <Card >
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image="/static/images/cards/contemplative-reptile.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                  Lizard
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                  across all continents except Antarctica
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
      )
    }
}

export default BunnyCommunityShow