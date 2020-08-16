import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList'
import AddGalleryItem from '../AddGalleryItem/AddGalleryItem';


class App extends Component {

  state = {
    galleryList : [
      { 
        id: '', 
        path: '', 
        description: '', 
        likes: 0 
      }
    ]
  }

  componentDidMount(){
    this.getPhotos();
  }

  getPhotos = () => {
    axios.get('/gallery')
    .then(response =>  {
      console.log(response);
      this.setState({
        galleryList : response.data
      })      
    }).catch(error => {
      alert('error in get')
    })
  }

  addPhoto = (newPhoto) => {
    console.log(newPhoto);
    // POST your data here
    axios.post('/gallery', newPhoto)
    .then((response) => {
      this.getPhotos();
    }).catch((error) => {
      console.log(error);
    })
  }


  putLike = (id) => {
    axios.put(`/gallery/${id}`)
    .then((response) => {
        this.getPhotos();
    })
    .catch((error) => {
        console.log(error)})
  }

  deletePhoto = (id) => {
    axios.delete(`/gallery/${id}`)
    .then((response) => {
        this.getPhotos();
    })
    .catch((error) => {
        console.log(error)})
  }

  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of Travels</h1>
        </header>
        <AddGalleryItem addPhoto = {this.addPhoto}/>
        <br/>
            <GalleryList  
            galleryList = {this.state.galleryList} deletePhoto = {this.deletePhoto} 
            likeIt = {this.putLike}
            />
        
      </div>
    );
  }
}

export default App;
