import { useEffect } from "react";
import Movie from "./Movie";

const MovieList = (props) => {
  useEffect(() => {
    console.log(props);
  }, []);
  return (
    <section>
      <h2>Filmer:</h2>
      {props.movies.map((movie, index) => {
        return (
          <Movie
            movie={movie}
            key={index + movie.Title}
            index={index}
            handleClick={
              props.type === "list"
                ? () => props.removeMovie(index)
                : () => props.addMovie(movie)
            }
            type={props.type}
          />
        );
      })}
    </section>
  );
};

export default MovieList;
