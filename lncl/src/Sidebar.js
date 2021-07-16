import React from "react";
import { Avatar } from "@material-ui/core";
import "./Sidebar.css";
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";
function Sidebar() {
  const user = useSelector(selectUser);

  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEV9B1NYXr2wjEki0YckpB12QE3SvY9XC0ag&usqp=CAU"
          alt=""
        />
        <Avatar src={user.photoUrl} className="sidebar__avatar">
          {user.email[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you </p>
          <p className="sidebar__statNumber">2,543</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on Post</p>
          <p className="sidebar__statNumber">1059</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>

        {recentItem("Developer")}
        {recentItem("Reactjs")}
        {recentItem("Firebase")}
        {recentItem("Mern")}
        {recentItem("Programming")}
      </div>
    </div>
  );
}

export default Sidebar;
