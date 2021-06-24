import React from "react";

function Card({ info }) {
  const { id, title, year, publisher, subjects, url } = info;

  return (
    <div className="card col-10 col-md-5 text-start m-4">
      <div className="card-header">
        <p>
          <span className="fw-bolder">ID: </span> {id}
        </p>
        <p>
          <span className="fw-bolder">Title: </span> {title}
        </p>
      </div>
      <div className="card-body">
        <p className="card-text">
          <span className="fw-bolder">Publish Year: </span> {year}
        </p>
        <p className="card-text">
          <span className="fw-bolder">Publisher: </span>
          {publisher}
        </p>
        <p className="card-text">
          <span className="fw-bolder">Subjects: </span>
          <span>
            {subjects.map(({ subject }, index) => (
              <span key={index}> {subject},</span>
            ))}
          </span>
        </p>
        <a href={url} className="card-link">
          CCDC Website
        </a>
      </div>
    </div>
  );
}

export default Card;

/* return (
    <div>
      <div>
        <p>ID: {id}</p>
        <p>Title: {title}</p>
      </div>
      <div>
        <p>Publish Year: {year}</p>
        <p>Publisher: {publisher}</p>
        <p>
          Subjects: 
          <span>
            {subjects.map(({ subject }, index) => (
              <span key={index}> {subject},</span>
            ))}
          </span>
        </p>
        <a href={url}>{url}</a>
      </div>
    </div>
  ); */
