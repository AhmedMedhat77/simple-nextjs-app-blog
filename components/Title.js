import React from "react";

function Title(props) {
  return (
    <div className="title">
      <h1 className="title__main">{props.title}</h1>
      <p className="title__desc">{props?.desc}</p>
    </div>
  );
}

export default Title;
