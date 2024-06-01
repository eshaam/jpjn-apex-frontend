import { useEffect, useState } from "react";
import Loader from "../Loader.jsx";
import PlayersList from "./PlayersList.jsx";

const Players = () => {
  const [players, setPlayers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const controller = new AbortController();

  async function fetchPlayers() {
    try {
      setIsLoading(true);
      setError("");

      const res = await fetch(`https://jpjn.eshaam.co.za/player_data_api.php`, {
        signal: controller.signal,
      });

      if (!res.ok) throw new Error("Something went wrong with fetching datat");

      const data = await res.json();
      if (data.Response === "False") throw new Error("data not found");
      console.log(data);
      setPlayers(data);

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
    fetchPlayers();
    console.log(players);
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && !error && <PlayersList players={players} />}
    </>
  );
};
export default Players;
