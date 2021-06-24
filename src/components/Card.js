import React from "react";

function Card({ info }) {
  const { id, title, year, publisher, subjects, url } = info;

  return (
    <div className="card m-4">
      <div className="card-header">
        <p>ID: {id}</p>
        <p>Title: {title}</p>
      </div>
      <div className="card-body">
        <p className="card-text">Publish Year: {year}</p>
        <p className="card-text">Publisher: {publisher}</p>
        <p className="card-text">
          Subjects:
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
