import { useState, useEffect } from "react";

const KEY = "a79892d8";

export function useMovies(query) {
  const [movies, setMovies] = useState([]); // To store the list of movies from the API
  const [isLoading, setIsLoading] = useState(false); // To track whether data is being loaded
  const [error, setError] = useState(""); // To store any errors that occur during data fetching
  // Effect for fetching movies from the API based on the search query
  useEffect(
    function () {
      //   callback?.();
      const controller = new AbortController();

      async function fetchMovies() {
        try {
          setIsLoading(true);
          setError("");
          const response = await fetch(
            `http://www.omdbapi.com/?s=${query}&apikey=${KEY}`,
            { signal: controller.signal }
          );
          const result = await response.json();
          if (!response.ok)
            throw new Error("Something went wrong with fetching movies");
          if (result.Response === "False") throw new Error(result.Error);
          setMovies(result.Search);
          setError("");
        } catch (error) {
          if (error.name !== "AbortError") setError(error.message);
        } finally {
          setIsLoading(false);
        }
      }

      // Check if the query length is less than 3 characters, then reset movies and error
      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }

      // Close the detailed view before fetching new movies
      //   handleCloseMovie();
      fetchMovies();

      return function () {
        controller.abort(); // Cleanup function to abort the fetch if the component is unmounted
      };
    },
    [query]
  );
  return { movies, isLoading, error };
}
