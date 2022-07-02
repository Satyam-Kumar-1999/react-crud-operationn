import React from 'react'
import Img from '../telephone.png'
import "./About.css"
const About = () => {
  return (
  <div>
    <h3>This is a Simple Contact Management Application Made With React And Firebase Real Time Database.</h3>
      <img src={Img} alt="" height="250px" width="250px"/>
      <p>You Can Add Contacts, Update Contacts, View Contacts And Delete Contacts.</p>
        <h3>Developer : Satyam Kumar Jha</h3>
        <p >For Any Query Mail Me At : (jerry2806.mysmile@gmail.com)</p>
      </div>
  )
}
export default About