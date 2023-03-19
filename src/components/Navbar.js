import React from "react";

export default function Navbar() {
  function topMovies() {}

  return (
    <>
      <nav>
        <h1 className="navTitle">Top 20 IMDb Movies</h1>
        <div className="topBtn">
          <button type="button" onClick={topMovies}>
            Top Rating Movies
          </button>
        </div>
      </nav>
    </>
  );
}
