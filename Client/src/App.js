import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/form";
import Favorites from "./components/Favorites/Favorites";
import { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store.js";
// import backgroundImage from "./img/rick-n-morty-wallpaper.jpg";
//const URL_BASE = "https://be-a-rym.up.railway.app/api/character";
//const API_KEY = "ee420521506a.50f830631b63dee9c86f";

// const email = "germancazal124@gmail.com";
// const password = "german123";

const URL = "http://localhost:3001/rickandmorty/login";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);

  const login = async (userData) => {
    try {
      const { email, password } = userData;
      const { data } = await axios(
        URL + `?email=${email}&password=${password}`
      );
      const { access } = data;

      setAccess(access);
      access && navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);

  const onSearch = async (id) => {
    try {
      const { data } = await axios(
        `http://localhost:3001/rickandmorty/character/${id}`
      );

      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      }
    } catch (error) {
      alert("¡No hay personajes con este ID!");
    }
  };

  const onClose = (id) => {
    const charactersFiltered = characters.filter(
      (character) => character.id !== id
    );
    setCharacters(charactersFiltered);
  };

  return (
    <Provider store={store}>
      {/* <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "scroll",
          height: "100vh",
        }}
      > */}
      {location.pathname !== "/" && (
        <Nav onSearch={onSearch} setAccess={setAccess} />
      )}

      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
      {/* </div> */}
    </Provider>
  );
}

export default App;
