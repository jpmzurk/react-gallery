import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem'

class GalleryList extends Component {
    render() {
        console.log(this.props.galleryList);
        
        return (
            <div>
                {this.props.galleryList.map(photo => {
                    return <GalleryItem
                    key={photo.id} photo = {photo} />
                })}
            </div>
        );
    }
}



export default GalleryList;
