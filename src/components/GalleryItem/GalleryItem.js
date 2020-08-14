import React, { Component } from 'react';

class GalleryItem extends Component {

    state = {
        isWords : true
    }

    changePhotoState = () => {
        this.setState({
            isWords : !this.state.isWords
        })
    }

    render() {
        const { id, path, description, likes} = this.props.photo;

        return (
        
            <div style={div} >
                <div onClick={this.changePhotoState} >
                {this.state.isWords ? <img style={img} src={path} alt={description}/> : <p style={p}> {description}</p>}
                </div>
                <div>
                <button onClick={(event) => this.props.likeIt(id)} > Like </button>
                <button onClick={(event) => this.props.deletePhoto(id)} > Delete </button>
                </div>
                <p> {likes} people like this photo</p>
            </div>
            
            
        );
    }
}

const div = {
    width : '15em', 
    margin : '4em', 
    float : 'left',
    border: '1px solid #ccc',
}

const p = {
    padding: '4em', 
    textAlign: 'center'
}

const img = {
    width: '100%', 
    height: 'auto'
}


// { id: 2, path: 'public/images/IMG_2.jpg', description: 'Photo taken in San Sebastian, Spain', likes: 0 },

export default GalleryItem;
