import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/movies")
      .then((res) => res.json())
      .then((data) => {
        console.log("Movies fetched:", data);
        setMovies(data);
      })
      .catch((error) => console.error("Error fetching movies:", error));
  }, []);

  return (
    <>
      <NavBar />
      <h1>Home Page</h1>
      <main>
        {movies.length > 0 ? (
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
        ) : (
          <p>No movies found. Check console for errors.</p>
        )}
      </main>
    </>
  );
}

export default Home;
