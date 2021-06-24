import React, { createContext, useEffect, useState } from "react";

export const CcdcContext = createContext();

export const CcdcProvider = ({ children }) => {
  const [ccdcData, setCcdcData] = useState();
  useEffect(() => {
    fetch("https://api.test.datacite.org/dois?query=prefix:10.5517 ")
      .then((res) => res.json())
      .then((data) => {
        setCcdcData(data);
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <CcdcContext.Provider value={{ ccdcData }}>{children}</CcdcContext.Provider>
  );
};
