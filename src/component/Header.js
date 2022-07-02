import React, {useEffect, useState} from 'react'
import {Link, useLocation} from "react-router-dom"
import "./Header.css"
const Header = () => {
    const [activeTab, setActiveTab]=useState("Home");
    const location = useLocation();
    useEffect(()=>{
        if(location.pathname === "/"){
                setActiveTab("Home");
        }else if(location.pathname === "/AddEdit"){
                setActiveTab("Add Contact");
        }else if(location.pathname === "/About"){
                setActiveTab("About");
        }else if(location.pathname ==="/View"){
                setActiveTab("View Contact And Update");
        }
    },[location]);
  return (
    <div className="topnav">
        <Link to="/">
        <p className={`${activeTab === "Home" ? "active" : ""}`} onClick={()=> setActiveTab("Home")}>
        
Home
        </p>
        </Link>
        <Link to="/AddEdit">
        <p className={`${activeTab === "Add Contact" ? "active" : ""}`} onClick={()=> setActiveTab("Add Contact")}>
        
Add Contact
        </p>

            

        </Link>
        <Link to="/View">
        <p className={`${activeTab === "View Contact And Update" ? "active" : ""}`} onClick={()=> setActiveTab("View Contact And Update")}>
        
View Records
        </p>

            

        </Link>
        <Link to="/About">
        <p className={`${activeTab === "About" ? "active" : ""}`} onClick={()=> setActiveTab("About")}>
        
About
        </p>

            

        </Link>
    </div>
    
  )
}

export default Header