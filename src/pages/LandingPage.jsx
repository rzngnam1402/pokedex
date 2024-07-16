import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const { user, loading, error } = useSelector((state) => state.user);
  console.log("landing", user);
  return (
    <>
      <div className="container text-center mt-5">
        <div className="jumbotron">
          <h1 className="display-4">Welcome to Pokedex!</h1>
          <p className="lead">Your ultimate Pokemon database.</p>
          <hr className="my-4" />
          <p>
            Search and explore detailed information about your favorite Pokemon.
          </p>
          <Link to="/pokelist" className="btn btn-primary btn-lg" role="button">
            Explore Now
          </Link>
        </div>

        <div id="explore" className="mt-5">
          <h2>Explore Pokemon</h2>
          <p>Discover detailed stats, abilities, and more!</p>
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <img
                  className="card-img-top"
                  src="src/assets/images/001.png"
                  alt="Pokemon"
                />
                <div className="card-body">
                  <h5 className="card-title">Bulbasaur</h5>
                  <p className="card-text">
                    Bulbasaur is a Grass/Poison type Pokémon. It evolves into
                    Ivysaur at level 16.
                  </p>
                  <a href="#" className="btn btn-primary">
                    View Details
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card">
                <img
                  className="card-img-top"
                  src="src/assets/images/004.png"
                  alt="Pokemon"
                />
                <div className="card-body">
                  <h5 className="card-title">Charmander</h5>
                  <p className="card-text">
                    Charmander is a Fire type Pokémon. It evolves into
                    Charmeleon at level 16.
                  </p>
                  <a href="#" className="btn btn-primary">
                    View Details
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img
                  className="card-img-top"
                  src="src/assets/images/007.png"
                  alt="Pokemon"
                />
                <div className="card-body">
                  <h5 className="card-title">Squirtle</h5>
                  <p className="card-text">
                    Squirtle is a Water type Pokémon. It evolves into Blastoise
                    at level 16.
                  </p>
                  <a href="#" className="btn btn-primary">
                    View Details
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
