import React, { useState, useEffect, useContext } from "react";
import { Route, Routes, Link } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import LandingPage from "./pages/landingPage/LandingPage";
import DetailsPage from "./pages/detailsPage/DetailsPage";
import { ApplicationProvider } from "./contexts.js";

function App() {
  const [counter, setCounter] = useState(0);
  const [allShows, setAllShows] = useState([]);
  const [clickedShow, setClickedShow] = useState(
    localStorage.getItem("clickedShow")
  );
  const [displayShow, setDisplayShow] = useState({});

  useEffect(() => {
    fetch("https://api.tvmaze.com/shows")
      .then((res) => res.json())
      .then((data) => setAllShows(data));
  }, []);

  useEffect(() => {
    setDisplayShow(allShows.find((e) => e.id == clickedShow));
  }, [clickedShow]);

  return (
    <>
      <ApplicationProvider
        value={{ allShows, setAllShows, clickedShow, setClickedShow }}
      >
        <Header />

        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route
            path="/showInfo/:id"
            element={
              <DetailsPage
                displayShow={displayShow}
                clickedShow={clickedShow}
              />
            }
          ></Route>
        </Routes>

        <Footer />
      </ApplicationProvider>
    </>
  );
}

export default App;
