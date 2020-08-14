import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem'

class GalleryList extends Component {
    render() {
        console.log(this.props.galleryList);
        
        return (
            <div>
                {this.props.galleryList.map(photo => {
                    return <GalleryItem
                                key={photo.id} 
                                photo = {photo} 
                                likeIt = {this.props.likeIt} 
                                deletePhoto={this.props.deletePhoto}/>
                })}
            </div>
        );
    }
}



export default GalleryList;
