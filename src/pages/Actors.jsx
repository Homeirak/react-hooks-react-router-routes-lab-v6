//Actors
import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";

function Actors() {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/actors")
      .then((res) => res.json())
      .then((data) => {
        console.log("Actors fetched:", data); // ✅ Log response to console
        setActors(data);
      })
      .catch((error) => console.error("Error fetching actors:", error));
  }, []);

  return (
    <>
      <NavBar />
      <h1>Actors Page</h1>
      <main>
        {actors.length > 0 ? (
          actors.map((actor) => (
            <article key={actor.name}>
              <h2>{actor.name}</h2>
              <ul>
                {actor.movies.map((movie, index) => (
                  <li key={index}>{movie}</li>
                ))}
              </ul>
            </article>
          ))
        ) : (
          <p>No actors found. Check console for errors.</p>
        )}
      </main>
    </>
  );
}

export default Actors;