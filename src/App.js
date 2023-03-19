import React from "react";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import TopMovies from "./components/TopMovies";

function App() {
  let movie = "top";

  // const TopRating =()=> {

  //   if(movie==="top"){
  //    return <TopMovies />
  //   }else{
  //   return <Main />
  //   }

  // }

  return (
    <>
      <Navbar />
      {movie === "top" ? <TopMovies /> : <Main />}
    </>
  );
}

export default App;
