import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardImg,
  Button,
} from "reactstrap";
import { formatId } from "../utils/format";

const PokemonCard = ({ pokemon }) => {
  const { name, type, base, id } = pokemon;

  return (
    <Card style={{ margin: "10px", width: "18rem" }}>
      <CardImg
        top
        width="100%"
        src={`src/assets/images/${formatId(id)}.png`}
        alt={name.english}
      />
      <CardBody>
        <CardTitle tag="h5">
          <span id="name">{name.english}</span>
        </CardTitle>
        <CardText>
          <strong>Type:</strong> {type.join(", ")}
          <br />
          <strong>HP:</strong> {base.HP}
          <br />
          <strong>Attack:</strong> {base.Attack}
          <br />
          <strong>Defense:</strong> {base.Defense}
          <br />
          <strong>Sp. Attack:</strong> {base["Sp. Attack"]}
          <br />
          <strong>Sp. Defense:</strong> {base["Sp. Defense"]}
          <br />
          <strong>Speed:</strong> {base.Speed}
        </CardText>
        <Link to={`/pokelist/${pokemon.id}`}>
          <Button>View Details</Button>
        </Link>
      </CardBody>
    </Card>
  );
};

export default PokemonCard;
