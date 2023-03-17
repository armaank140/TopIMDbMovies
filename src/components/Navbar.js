import React from "react";
// import Data from "../Data";
// import Cards from './Cards';

// console.log(Data)

// const topMovies = Data.filter(obj => obj.rating >=9);

//   console.log(topMovies);

export default function Navbar() {
  return (
    <>
      <nav>
        <h1 className="navTitle">Top 20 IMDb Movies</h1>
        <div className="topBtn">
          <button type="button">Top Rating Movies</button>
        </div>
      </nav>
    </>
  );
}
