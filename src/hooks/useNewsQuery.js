import { useContext, useEffect, useState } from "react";
import { CategoryContext, SearchContext } from "../context";

export default function useNewsQuery() {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState({
    state: false,
    message: "",
  });
  const [error, setError] = useState(null);

  const { category } = useContext(CategoryContext);
  const { searchTerm } = useContext(SearchContext);

  async function fetchNewsData() {
    let url = `http://localhost:8000/v2/top-headlines`;
    try {
      setLoading({
        ...loading,
        state: true,
        message: "Loading news...",
      });

      if (category.state === "searched" && searchTerm.trim().length > 0) {
        url = `http://localhost:8000/v2/search?q=${searchTerm}`;
      } else if (category.state && category.state !== "searched") {
        url = `http://localhost:8000/v2/top-headlines?category=${category.state}`;
      }
      const response = await fetch(url);

      if (!response.ok) {
        const errMsg = `Loading news data failed. ${response.status}`;
        throw new Error(errMsg);
      }

      const data = await response.json();

      if (category.state === "searched" && searchTerm.trim().length > 0) {
        setNewsData(data.result);
      } else {
        setNewsData(data.articles);
      }
    } catch (err) {
      setError(err);
    } finally {
      setLoading({
        ...loading,
        state: false,
        message: "",
      });
    }
  }

  useEffect(() => {
    fetchNewsData();
  }, [category]);

  return { newsData, loading, error };
}
