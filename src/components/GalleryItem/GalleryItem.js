import React, { Component } from 'react';

class GalleryItem extends Component {
    render() {
        const { id, path, description, likes} = this.props.photo;
        return (
            <div>
                <img src={path}/>
                <li> {description}</li>
            </div>
        );
    }
}

const style = {width : '4em', height : '4em'}

// { id: 2, path: 'public/images/IMG_2.jpg', description: 'Photo taken in San Sebastian, Spain', likes: 0 },

export default GalleryItem;
