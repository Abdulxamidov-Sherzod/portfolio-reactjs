import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { loadDetail } from "./actions/detailAction";
import { Link } from "react-router-dom";
import { popup } from "./animation";

const Game = ({ name, released, img, id }) => {
  const stringPathId = id.toString();
  //Load Details
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    dispatch(loadDetail(id));
    console.log(typeof id);
  };
  return (
    <StyledGame
      variants={popup}
      initial="hidden"
      animate="show"
      layoutId={id}
      onClick={loadDetailHandler}
    >
      <Link to={`/game/${id}`}>
        <h4>{name}</h4>
        <p>{released}</p>
        <img src={img} alt={name} />
      </Link>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.3);
  text-align: center;
  border-radius: 1rem;
  padding: 0.5rem 0 0 0;
  cursor: pointer;
  overflow: hidden;
  h4 {
    font-size: 1rem;
  }
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;

export default Game;
