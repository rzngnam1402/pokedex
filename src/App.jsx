import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Login from "./pages/Login";
import { Provider } from "react-redux";
import store from "./store/Store";
import PokemonList from "./pages/PokemonList";
import LandingPage from "./pages/LandingPage";
import PokemonDetails from "./pages/PokemonDetails";
import { Logout } from "./pages/Logout";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route exact path="/pokelist" element={<PokemonList />} />
          <Route path="/pokelist/:id" element={<PokemonDetails />} />
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
