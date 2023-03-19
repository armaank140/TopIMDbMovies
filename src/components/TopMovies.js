import React from "react";
import Data from "../Data";
import Cards from "./Cards";

export default function TopMovies() {
  let fData = Data.filter((val) => val.rating >= 9.0);

  //   console.log(fData.map((fval)=>fval.title))

  return (
    <>
      {fData.map((val) => {
        // console.log(index)
        // console.log(arr)
        return (
          <Cards
            key={val.rank}
            Image={val.image}
            Title={val.title}
            Description={val.description}
            Rating={val.rating}
            Year={val.year}
            link={val.trailer}
            Genre={val.genre}
            Director={val.director}
            Writers={val.writers}
          />
        );
      })}
    </>
  );
}
