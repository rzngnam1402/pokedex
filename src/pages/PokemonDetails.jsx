import React from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardImg,
} from "reactstrap";
import pokemonList from "../data/pokedex.json";
import { formatId } from "../utils/format";
import { useSelector } from "react-redux";
import Login from "./Login";
import Navbar from "../components/Navbar";

const PokemonDetails = () => {
  const { user } = useSelector((state) => state.user);
  console.log("detail page", user);
  const { id } = useParams();
  const pokemon = pokemonList.find((p) => p.id === parseInt(id));
  if (!pokemon) {
    return <h2>Pokemon not found</h2>;
  }

  return (
    <>
      {user ? (
        <>
          <Navbar />
          <Container>
            <Row className="justify-content-center">
              <Col md="6">
                <Card>
                  <CardImg
                    top
                    width="100%"
                    src={`/src/assets/images/${formatId(id)}.png`}
                    alt={pokemon.name.english}
                  />
                  <CardBody>
                    <CardTitle tag="h5">
                      <span id="name">{pokemon.name.english}</span>
                    </CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">
                      {pokemon.type.join(", ")}
                    </CardSubtitle>
                    <CardText>
                      <strong>HP:</strong> {pokemon.base.HP}
                      <br />
                      <strong>Attack:</strong> {pokemon.base.Attack}
                      <br />
                      <strong>Defense:</strong> {pokemon.base.Defense}
                      <br />
                      <strong>Sp. Attack:</strong> {pokemon.base["Sp. Attack"]}
                      <br />
                      <strong>Sp. Defense:</strong>{" "}
                      {pokemon.base["Sp. Defense"]}
                      <br />
                      <strong>Speed:</strong> {pokemon.base.Speed}
                      <br />
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </>
      ) : (
        <Login />
      )}
    </>
  );
};

export default PokemonDetails;
