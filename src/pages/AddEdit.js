import React, {useState, useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";
import fireDb from "../firebase";
import {toast} from "react-toastify";
import "./AddEdit.css";
const initialState = {
 name : "",
 email : "",
 contact :"" 
}
const AddEdit = () => {
  const [state, setState]=useState(initialState);
  const [data, setData]=useState({});
  const navigate = useNavigate();
  const {id} = useParams();
  useEffect(()=>{
    fireDb.child("contacts").on("value", (snapshot)=>{
      if(snapshot.val() !== null){
        setData({...snapshot.val()});
      }else{
        setData({});
      }
    });
    return()=>{
      setData({});
    };
  },[id]);
  useEffect(()=>{
    if(id){
      setState({...data[id]});
    }else{
      setState({...initialState});
    }
    return()=>{
      setState({...initialState});
    };
  },[id, data]);
  const {name, email, contact}=state;
  const handleInputChange = (e)=>{
    const {name, value}=e.target;
    setState({...state, [name]: value});
  };
  const handleSubmit = (event)=>{
    event.preventDefault();
    if(!name || !email || !contact){
      toast.error("Provide All Details.");
    }else{
      if(!id){
        fireDb.child("contacts").push(state, (err)=>{
          if(err){
            toast.error(err);
          }else{
            toast.success("Details Successfully Saved Into The Database.");
          }
        });
      }else{
        
        fireDb.child(`contacts/${id}`).set(state, (err)=>{
          if(err){
            toast.error(err);
          }else{
            toast.success("Details Updated Successfully And Saved Into The Database.");
          }
        });
      }
      setTimeout(()=>navigate("/"),500);
    }
  
  };
  return (
    <div style={{marginTop : "40px"}}>
      <form autoComplete="off"
        style={{
          margin:"auto",
          padding:"5px",
          maxWidth:"400px",
          alignContent:"center",
          
        }}
        onSubmit={handleSubmit}
        >
          <label htmlFor="name">Name</label>
          <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter Name"
          value={name||""}
          onChange={handleInputChange}/>
           <label htmlFor="email">Email</label>
          <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter Email"
          autoComplete="off"
          value={email||""}
          onChange={handleInputChange}/>
          <label htmlFor="contact">Contact</label>
          <input
          type="number"
          id="contact"
          name="contact"
          placeholder="Enter Contact"
          value={contact||""}
          onChange={handleInputChange}/>
          <input
          type="submit"
          value={id ? "UPDATE RECORD TO DATABASE" : "SAVE TO DATABASE" }
        />
        </form>
    </div>

  );
};

export default AddEdit