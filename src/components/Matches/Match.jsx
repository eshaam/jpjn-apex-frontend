const Match = ({ match }) => {
  return (
    <tr>
      <td>{match.name}</td>
      <td>{match.legendPlayed}</td>
      <td>{match.kills}</td>
      <td>{match.damage}</td>
      <td>{match.BRScoreChange}</td>
      <td>{match.gameLengthSecs}</td>
      <td>{match.gameStartTimestamp}</td>
      <td>{match.map}</td>
    </tr>
  );
};

export default Match;
