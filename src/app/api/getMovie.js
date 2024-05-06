const getMovie = async (search) => {
  const url = `https://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_OMDB_KEY}&s=${search}`;

  const response = await fetch(url);

  return response.json();
};

export default getMovie;
