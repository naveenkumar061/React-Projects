import WatchedMovie from "./WatchedMovie";

function WatchedMoviesList({ watched, onDeleteWatched }) {
  // console.log(watched);
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie
          movie={movie}
          key={movie.imdbID}
          onDeleteWatched={onDeleteWatched}
        />
      ))}
    </ul>
  );
}

export default WatchedMoviesList;
