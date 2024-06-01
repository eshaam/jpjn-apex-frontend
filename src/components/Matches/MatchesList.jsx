import Match from "./Match";
import Table from "react-bootstrap/Table";

const MatchesList = ({ matches, filter }) => {
  return (
    <>
      <input placeholder="Filter players" type="text" onChange={filter} />
      <a href="/">Reset</a>
      <Table responsive striped>
        <thead>
          <tr>
            <th>Player</th>
            <th>Legend</th>
            <th>Kills</th>
            <th>Damage</th>
            <th>BRScoreChange</th>
            <th>GameLengthSecs</th>
            <th>GameStartTimestamp</th>
            <th>Map</th>
          </tr>
        </thead>
        <tbody>
          {matches &&
            matches?.map((match) => (
              <Match match={match} key={match.gameStartTimestamp} />
            ))}
        </tbody>
      </Table>
    </>
  );
};

export default MatchesList;
