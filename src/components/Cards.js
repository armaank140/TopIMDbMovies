import React from "react";

export default function Cards(props) {
  return (
    <>
      <div className="CardContainer">
        <h1>{props.Title}</h1>
        <div className="rating-info">
          <p>IMDb rating:{props.Rating}/10 </p>
          <p>Year:{props.Year}</p>
        </div>
        <div className="BOX">
          <div className="image">
            <img src={props.Image} alt={props.Title} />
          </div>
          <div className="trailer">
            <iframe
              className="trailer-iframe"
              src={props.link}
              title={props.Title}
              allowFullScreen=""
            ></iframe>
          </div>
        </div>
        <div className="description">
          <p>{props.Description}</p>
        </div>
        <hr />
        <p className="p">Genre:{props.Genre}</p>
        <hr />
        <p className="p">Writer:{props.Writers}</p>
        <hr />
        <p className="p">Director:{props.Director}</p>
        <hr />
      </div>
    </>
  );
}
