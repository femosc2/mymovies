import Button from "../../Button";

const Movie = (props) => {
  return (
    <div>
      <p>{props.movie.Title}</p>
      <Button
        text={props.type === "list" ? "Remove" : "Add"}
        handleClick={() => props.handleClick()}
      />
    </div>
  );
};

export default Movie;
