import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList'
// import galleryItems from '~/modules/gallery.data.js'


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

  componentDidMount(){
      this.getPhotos();
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
       <GalleryList  galleryList = {this.state.galleryList} deletePhoto = {this.deletePhoto}/>
      </div>
    );
  }
}

export default App;
