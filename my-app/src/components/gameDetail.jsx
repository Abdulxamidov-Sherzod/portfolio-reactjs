import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { ImStarFull } from "react-icons/im";
import { BsStarFill } from "react-icons/bs";

const GameDetail = ({ pathId }) => {
  const history = useHistory();
  console.log(typeof pathId);
  // Exit Detail
  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      history.push("/");
    }
  };

  // Get Stars
  const getStars = () => {
    const stars = [];
    const rating = Math.floor(game.rating);
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<ImStarFull style={{ color: "#D97302" }} />);
      } else {
        stars.push(<BsStarFill style={{ color: "#716F72" }} />);
      }
    }
    return stars;
  };
  // Data
  const { screen, game, isLoading } = useSelector((state) => state.detail);
  return (
    <>
      {!isLoading && (
        <CardShadow className="shadow" onClick={exitDetailHandler}>
          <Detail layoutId={pathId}>
            <div className="stats">
              <div className="rating">
                <h3>{game.name}</h3>
                <span>Rating: {game.rating}</span>
                <b>{getStars()}</b>
              </div>
              <div className="info">
                <h4>Platforms</h4>
                <div className="platforms">
                  {game.platforms.map((data) => (
                    <h5 key={data.platform.id}>{data.platform.name}</h5>
                  ))}
                </div>
              </div>
            </div>
            <div className="media">
              <img key={game.id} src={game.background_image} alt={game.background_image} />
            </div>
            <div className="description">
              <p>{game.description_raw}</p>
            </div>
            <div className="gallery">
              {screen.results.map((screen) => (
                <img src={screen.image} key={screen.id} alt={screen.image} />
              ))}
            </div>
          </Detail>
        </CardShadow>
      )}
    </>
  );
};

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background: red;
    border-radius: 5px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #b30000;
  }
`;

const Detail = styled(motion.div)`
  width: 80%;
  padding: 2rem 3rem;
  color: black;
  background: white;
  border-radius: 1rem;
  left: 10%;
  position: absolute;
  z-index: 10;
  span {
    color: grey;
  }
  p {
    padding: 1rem;
  }
  img {
    width: 100%;
  }
  b {
    margin-left: 15px;
  }
`;

export default GameDetail;
