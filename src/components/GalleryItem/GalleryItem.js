import React, { Component } from 'react';

class GalleryItem extends Component {
    render() {
        const { id, path, description, likes} = this.props.photo;
        return (
            <div style={div}>
                <img style={{width: '100%', height: 'auto'}} src={path}/>
                <p style={{padding: '4em', textAlign: 'center'}}> {description}</p>
            </div>
        );
    }
}

const div = {
    width : '15em', 
    margin : '2em', 
    float : 'left',
    border: '1px solid #ccc',
}



// { id: 2, path: 'public/images/IMG_2.jpg', description: 'Photo taken in San Sebastian, Spain', likes: 0 },

export default GalleryItem;
