import React, {useEffect, useState} from 'react'
import fireDb from "../firebase";
import {Link} from "react-router-dom";
import {toast} from "react-toastify";

import "./View.css";

const View = () => {
  const [data, setData]=useState({});
  
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
  },[]);

  const myFunction=()=>{
    var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[2];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }    
       
  }


};
  
  const onDelete = (id)=>{
    if(window.confirm("Are You Sure, You Want To Delete This Contact Details ?")){
      fireDb.child(`contacts/${id}`).remove((err)=>{
        if(err){
          toast.err(err);
        }else{
          toast.success("Contact Details Deleted Successfully..");
        }
      });
    }
  };
  
  return (

    
    <div  
    style={{
      margin:"auto",
      padding:"15px",
      maxWidth:"1300px",
      maxHeight:"415px",
      alignContent:"center",
      marginTop : "40px"
    }}
   
    class="table_responsive">
      
      <input
       type="text"
        name="search"
         placeholder="Enter Contact Number To Search.."
         id="myInput"
         autocomplete="off"
         onChange={()=>myFunction()}
         
      

         ></input>
    <table id="myTable">
    
      <thead>
        <tr>
          <th>INDEX NUMBER</th>
          <th>NAME</th>
          <th>EMAIL</th>
          <th>CONTACT NUMBER</th>
          <th>ADMIN ACTION</th>
        </tr>
      </thead>

      <tbody>
       {Object.keys(data).map((id, index)=>{
        return(
          <tr key={id}>
            <th scope="row">{index+1}</th>
            <td>{data[id].name}</td>
            <td>{data[id].email}</td>
            <td>{data[id].contact}</td>
            <td>
            <span class="action_btn">
          
              <button><Link to={`/update/${id}`} style={{textDecoration:"none"}}>UPDATE</Link></button>
          
              
              <button onClick={()=>onDelete(id)}>DELETE</button>

            </span>
          </td>

          </tr>
        );
       })}
      </tbody>
    </table>
  </div>

 

  )
}

export default View