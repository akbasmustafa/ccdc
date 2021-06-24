import React, { useContext } from "react";
import { CcdcContext } from "../context/CcdcContext";
import Card from "./Card";

function CardList() {
  const { ccdcData } = useContext(CcdcContext);
  return (
    <div className="d-flex justify-content-center align-items-center flex-wrap border border-primary">
      {ccdcData
        ? ccdcData.data.map((item) => {
            const cardInfo = {
              id: item.id,
              title: item.attributes.titles[0].title,
              year: item.attributes.publicationYear,
              publisher: item.attributes.publisher,
              subjects: item.attributes.subjects,
              url: item.attributes.url,
            };
            return <Card key={item.id} info={cardInfo} />;
          })
        : null}
    </div>
  );
}

export default CardList;

// ccdcData.data.map((item) => {
//             const cardInfo = {
//               id: item.id,
//               title: item.attributes.titles[0],
//               year: item.attributes.publicationYear,
//               publisher: item.attributes.publisher,
//               subjects: item.attributes.subjects,
//               url: item.attributes.url,
//             };
//             return <Card key={item.id} info={cardInfo} />;
//           })
