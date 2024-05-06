import getMovie from "@/app/api/getMovie";
import TextInput from "../TextInput";
import { useState } from "react";
import MovieList from "../MovieList";

const AddMovie = (props) => {
  const [searchResult, setSearchResult] = useState([]);
  const searchMovie = async (event) => {
    const searchResults = await getMovie(event.target.value);

    if (event.target.value.length > 3 && searchResults.Search !== undefined) {
      setSearchResult(searchResults.Search);
    }
  };

  return (
    <section>
      <h2>Lägg till film!</h2>
      <TextInput onChange={searchMovie} />
      <MovieList movies={searchResult} addMovie={props.addMovie} type={"add"} />
    </section>
  );
};

export default AddMovie;
