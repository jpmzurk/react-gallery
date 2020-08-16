import React from "react";
import { useForm } from "react-hook-form";
import './AddGalleryItem.css'


export default function AddGalleryItem(props) {

  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data, e)=> {
    e.target.reset();
    props.addPhoto(data)
  };
 

  console.log(watch("example")); 

  return (
    <form 
        className="form-inline" 
        onSubmit={handleSubmit(onSubmit)}
    >
      <input  
        name= "path"  
        ref={register({ required: true })}
        className="form-control path"
        placeholder="file path to image" 
        style={{width:'35%'}}/>
        {errors.path && <p>This is required</p>}

      <input 
        name="description"  
        ref={register}
        className="form-control description"
        placeholder="describe your photo here" 
        style={{width:'35%'}}/>
       
        {errors.description && <p>This field is required</p>}
      <input className="btn btn-outline-secondary" type="submit"/> 
    </form>
  );
}