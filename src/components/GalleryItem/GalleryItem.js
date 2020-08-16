import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import clsx from 'clsx';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Collapse from '@material-ui/core/Collapse';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';



const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345, 
        margin : 20, 
        float: 'left'
    },
    media: {
      height: 345
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
  }));

  
  export default function GalleryItem(props)  {
        const classes = useStyles();
        const [expanded, setExpanded] = React.useState(false);

        const handleExpandClick = () => {
            setExpanded(!expanded);
          };
       
        return (
                <Card className={classes.root}>
                    <CardActionArea>
                    <CardMedia  className={classes.media}
                        component="img"
                        height= "auto"
                        image={props.photo.path}   alt={props.photo.description}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="body2" component="p">
                          
                            {props.photo.likes} people like this photo
                          
                        </Typography>
                    </CardContent>
                    </CardActionArea>
                    <CardActions>
                            <Button size="small" color="primary" onClick={() => props.likeIt(props.photo.id)} > Like </Button>
                            <Button size="small" color="secondary" onClick={() => props.deletePhoto(props.photo.id)} > Delete </Button>
                    </CardActions>
                        <IconButton
                            className= {clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                            })}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                            >
                            <ExpandMoreIcon />
                        </IconButton>
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                        <Typography paragraph>{props.photo.description}</Typography>
                        </CardContent>
                        </Collapse>
                </Card>   
             
        );
}