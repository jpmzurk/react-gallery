import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem'
import Grid from '@material-ui/core/Grid'

class GalleryList extends Component {
    render() {
        console.log(this.props.galleryList);
        
        return (
            <div>
                <Grid container>
                <Grid item xs={10}>
                {this.props.galleryList.map(photo => {
                    return <GalleryItem 
                                style={{margin : '3em'}}
                                key={photo.id} 
                                photo = {photo} 
                                likeIt = {this.props.likeIt} 
                                deletePhoto={this.props.deletePhoto}/>
                })}
                  </Grid>
                </Grid>
            </div>
        );
    }
}



export default GalleryList;
