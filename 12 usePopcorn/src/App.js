import NavBar from "./NavBar";
import Main from "./Main";
import NumResults from "./NumResults";
import MovieList from "./MovieList";
import Box from "./Box";
import WatchedSummary from "./WatchedSummary";
import WatchedMoviesList from "./WatchedMoviesList";
import { useState } from "react";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";
import Search from "./Search";
import MovieDetails from "./MovieDetails";
import { useMovies } from "./useMovies";
import { useLocalStorageState } from "./useLocalStorageState";

// const KEY = "a79892d8";

export default function App() {
  // State variables
  const [query, setQuery] = useState(""); // To store the search query
  const [selectedId, setSelectedId] = useState(null); // To store the id of the selected movie for detailed view
  const { movies, isLoading, error } = useMovies(query);
  const [watched, setWatched] = useLocalStorageState([], "watched");

  // Event handlers
  function handleSelectMovie(id) {
    // Function to handle selecting a movie for detailed view
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  }

  function handleCloseMovie() {
    // Function to handle closing the detailed view of a movie
    setSelectedId(null);
  }

  function handleAddWatched(movie) {
    // Function to handle adding a movie to the watched list
    setWatched((watched) => [...watched, movie]);
    // localStorage.setItem("watched", JSON.stringify([...watched, movie]));
  }

  function handleDeleteWatch(id) {
    // Function to handle deleting a movie from the watched list
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  }

  // Render the UI
  return (
    <>
      {/* Navigation bar with search input and number of results */}
      <NavBar>
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </NavBar>

      {/* Main content area */}
      <Main>
        {/* Box for displaying search results, loader, or error message */}
        <Box>
          {isLoading && <Loader />}{" "}
          {/* Display loader while data is being fetched */}
          {!isLoading && !error && (
            <MovieList movies={movies} onSelectMovie={handleSelectMovie} />
          )}
          {error && <ErrorMessage message={error} />}
        </Box>

        {/* Box for displaying detailed view of a movie or watched movies list */}
        <Box>
          {selectedId ? (
            <MovieDetails
              selectedId={selectedId}
              onCloseMovie={handleCloseMovie}
              onAddWatched={handleAddWatched}
              watched={watched}
            />
          ) : (
            <>
              {/* Display summary of watched movies and the list of watched movies */}
              <WatchedSummary watched={watched} />
              <WatchedMoviesList
                watched={watched}
                onDeleteWatched={handleDeleteWatch}
              />
            </>
          )}
        </Box>
      </Main>
    </>
  );
}
