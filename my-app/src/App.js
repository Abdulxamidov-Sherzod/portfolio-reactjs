// Components and pages
import GlobalStyles from "./actions/globalStyles";
import Home from "./pages/home";
import { Route } from "react-router-dom";
import Nav from "./components/nav";

function App() {
  return (
    <>
      <GlobalStyles />
      <Nav />
      <Route path={["/game/:id", "/"]}>
        <Home />
      </Route>
    </>
  );
}

export default App;
