import { useEffect, useState } from "react";
import Loader from "../Loader.jsx";
import MatchesList from "./MatchesList.jsx";

const Matches = () => {
  const [matches, setMatches] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const controller = new AbortController();
  //https://jpjn.eshaam.co.za/matches_api.php
  //http://jpjn.test:8080/matches_api_v2.php
  const handleFilter = (event) => {
    const value = event.target.value;
    const filtered = matches.filter((match) => match.name.includes(value));
    setMatches(filtered);
  };
  async function fetchMatches() {
    try {
      setIsLoading(true);
      setError("");

      const res = await fetch(`https://jpjn.eshaam.co.za/matches_api_v2.php`, {
        signal: controller.signal,
      });

      if (!res.ok) throw new Error("Something went wrong with fetching datat");

      const data = await res.json();
      if (data.Response === "False") throw new Error("data not found");
      console.log(data);
      setMatches(data);

      setError("");
    } catch (err) {
      if (err.name !== "AbortError") {
        setError(err.message);
      }
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(function () {
    fetchMatches();
    console.log(matches);
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && !error && (
        <MatchesList matches={matches} filter={handleFilter} />
      )}
    </>
  );
};
export default Matches;
