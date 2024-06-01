import { Row } from "react-bootstrap";
import Player from "./Player";
import Container from "react-bootstrap/Container";
import "./index.css";
const PlayersList = ({ players }) => {
  return (
    <Container fluid className="roomfac">
      <Row>
        {players &&
          players?.map((player) => <Player player={player} key={player.uid} />)}
      </Row>
    </Container>
  );
};

export default PlayersList;
