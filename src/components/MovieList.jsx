import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log(title, movies);
  if (!movies || movies.length === 0) {
    return <div>No movies available</div>;
  }

  return (
    <div className="pt-1  ">
      <h1 className="p-4 text-2xl py-2 text-white">{title}</h1>
      <div className="flex overflow-x-scroll scrollbar-hide hide-scrollbar">
        <div className="flex ">
          {movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
