import React from "react";
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("WINDOWS 11", "launches on 24th June")}
      {newsArticle("CoronaUpdate", "9584 people newcases")}
      {newsArticle("Reactjs", "new Treanding")}
      {newsArticle("NodeJs", "The best backend ")}
      {newsArticle("Developers", "DevOps has reached new heights")}
      {newsArticle("M/L", "A New horizon")}
      {newsArticle("IOS", "Srocks increases by 58%")}
    </div>
  );
}

export default Widgets;
