import React, { createContext } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
  const [data, setData] = useState();
  const apiKey = '5ab605ab88194c5f9131fabcc917c707';

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=tesla&from=2022-05-08&sortBy=publishedAt&apiKey=${apiKey}`
      )
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, [data]);

  return (
    <NewsContext.Provider value={{ data }}>
      {props.children}
    </NewsContext.Provider>
  );
};
