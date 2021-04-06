import styled from "styled-components";
import { motion } from "framer-motion";
import { IoLogoApple } from "react-icons/io";
import { fetchSearch } from "../actions/actionsGames";
import { useDispatch } from "react-redux";
import { useState } from "react";

const Nav = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");

  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };

  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(textInput));
    setTextInput("");
  };

  return (
    <StyledNav>
      <Logo>
        <IoLogoApple style={{ fontSize: "35", color: "#ff8a7c" }} />
        <span>Ignite</span>
      </Logo>
      <form className="search">
        <input value={textInput} onChange={inputHandler} type="text" />
        <button onClick={submitSearch} type="submit">
          Search
        </button>
      </form>
    </StyledNav>
  );
};

const StyledNav = styled(motion.div)`
  padding: 3rem 5rem;
  text-align: center;
  input {
    margin-top: 1rem;
    width: 35%;
    font-size: 1rem;
    padding: 0.5rem;
    box-shadow: 0px 0px 30px rgba(54, 39, 39, 0.3);
    outline: none;
    font-family: sans-serif;
    border: none;
  }
  button {
    font-size: 1rem;
    padding: 0.5rem 2rem;
    border: none;
    background-color: #ff8a7c;
    color: white;
    font-family: sans-serif;
    transition: all 0.3s linear;
    &:hover {
      background-color: #e25747;
    }
  }
`;
const Logo = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    font-size: 2rem;
  }
`;

export default Nav;
