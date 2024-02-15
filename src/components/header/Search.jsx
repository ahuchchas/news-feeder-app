import { useContext } from "react";
import SearchImage from "../../assets/icons/search.svg";
import { CategoryContext, SearchContext } from "../../context";
import useDebounce from "../../hooks/useDebounce";

export default function Search() {
  const { setSearchTerm } = useContext(SearchContext);
  const { setCategory } = useContext(CategoryContext);

  const doSearch = useDebounce(() => {
    setCategory((c) => ({ ...c, state: "searched" }));
  }, 1000);

  function handleSubmit(e) {
    e.preventDefault();
    doSearch();
  }
  return (
    <form action="#" onSubmit={handleSubmit}>
      <div className="flex items-center space-x-2 py-2 px-3 group bg-black/10 transition-all border-b border-white/50 focus-within:border-b-0 rounded-md">
        <input
          className="bg-transparent w-full text-xs md:text-base outline-none border-none"
          type="search"
          placeholder="Search news"
          onChange={(e) => setSearchTerm(e.target.value)}
          required
        />
        <button type="submit">
          <img src={SearchImage} />
        </button>
      </div>
    </form>
  );
}
