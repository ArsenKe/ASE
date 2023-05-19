function Search() {
  return (
    <div className="input-group my-4">
      <input
        type="text"
        className="form-control"
        placeholder="Search events..."
        aria-label="Search events"
      />
      <span className="input-group-text">
        <i className="bi bi-search"></i>
      </span>
    </div>
  );
}

export default Search;
