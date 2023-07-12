import { useGlobalContext } from "./context";

const SearchForm = () => {
  const { setSearch } = useGlobalContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(e.target.elements.search.value);
  };
  return (
    <div>
      <h1 className="title">Unplash Image</h1>
      <form action="" className="search-form" onSubmit={handleSubmit}>
        <input type="text" name="search" />
        <button className="btn">Search</button>
      </form>
    </div>
  );
};
export default SearchForm;
