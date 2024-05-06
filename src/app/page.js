"use client";
import { useState } from "react";
import AddMovie from "./components/AddMovie";
import MovieList from "./components/MovieList";
import { StyledMain } from "./styles";

export default function Home() {
  const [movies, setMovies] = useState([
    { Title: "Star Wars: A new hope" },
    { Title: "Lord of the Rings" },
  ]);

  const addMovie = (movie) => {
    console.log("add MOvie");
    setMovies([...movies, movie]);
  };

  const removeMovie = (indexToRemove) => {
    const updatedMovies = [...movies];
    updatedMovies.splice(indexToRemove, 1);
    setMovies(updatedMovies);
  };

  return (
    <StyledMain>
      <AddMovie addMovie={addMovie} type={"add"} />
      <hr />
      <MovieList movies={movies} removeMovie={removeMovie} type={"list"} />
    </StyledMain>
  );
}
