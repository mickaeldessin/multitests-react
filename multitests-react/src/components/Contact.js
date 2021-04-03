import React from "react";
import "./Contact.css";
function Contact(props) {
  return (
    <div className="Contact">
      <img src={props.img} className="avatar" alt="avatar" />
      <div className="status-text">
        <p className="name">{props.firstname}</p>
        <div className = "status">
        <span className = {props.online ? 'status-online': 'status-offline'}></span>
        <p className = "status-text">{ props.online ? "online":"offline"}</p>   
        </div>
      </div>
    </div>
  );
}

export default Contact;
