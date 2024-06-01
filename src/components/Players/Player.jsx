import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Player = ({ player }) => {
  return (
    <Col sm="auto">
      <img className="max-w-xs " src={player.rankImg} />
      <h4>{player.name}</h4>
      <p className="text-gray-700 text-base">
        {player.rankName} {player.rankDiv}
      </p>
      <p className="text-grey-700 text-base font-semibold">
        {player.rankScore} RP
      </p>
    </Col>
  );
};

export default Player;
