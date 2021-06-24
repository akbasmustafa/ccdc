import React from "react";

function Card({ info }) {
  const { id, title, year, publisher, subjects, url } = info;
  console.log(subjects);
  return (
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
        ;<a href={url}>{url}</a>
      </div>
    </div>
  );
}

export default Card;
