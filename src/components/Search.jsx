import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";

function Search() {
  const [inputText, setInputText] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSearch = () => {
    if (!inputText.trim()) {
      searchParams.delete("title");
      setSearchParams(searchParams);
    } else {
      setSearchParams(prev => {
        prev.set("title", inputText);
        return prev;
      });
    }
  };

  return (
    <div className="left-40 absolute mt-10 flex gap-2">
      <input
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        className="border-2 rounded-2xl border-dashed border-orange-500 px-3"
        type="text"
        placeholder="search"
      />
      <button onClick={handleSearch}>
        <FaSearch />
      </button>
    </div>
  );
}

export default Search;
