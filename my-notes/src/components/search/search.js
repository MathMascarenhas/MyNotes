import { MdSearch } from "react-icons/md";
import './search.css'

export function Search( {handleSearch}) {


  return (
    <div className="search">
      <MdSearch className="search-icon" size="1.3rem" />
      <input
        type="text"
        placeholder="type to search..."
        onChange={(event) =>
					handleSearch(event.target.value)
				}
      />
    </div>
  );
}
