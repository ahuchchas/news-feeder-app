/* eslint-disable react/prop-types */
import { NewsContext } from "../context";
import useNewsQuery from "../hooks/useNewsQuery";

export default function NewsProvider({ children }) {
  const { loading, error, newsData } = useNewsQuery();
  return (
    <NewsContext.Provider value={{ loading, error, newsData }}>
      {children}
    </NewsContext.Provider>
  );
}
