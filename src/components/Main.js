import React from "react";
import Cards from "./Cards";
import Data from "../Data";

function mCard(val) {
  // console.log(val)
  return (
    <Cards
      Image={val.image}
      Title={val.title}
      Description={val.description}
      Rating={val.rating}
      Year={val.year}
      link={val.trailer}
      Srno={val.rank}
      Genre={val.genre}
      Director={val.director}
      Writers={val.writers}
    />
  );
}

export default function Main() {
  return <>{Data.map(mCard)}</>;
}
