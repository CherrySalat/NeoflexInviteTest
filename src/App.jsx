import FooterMenu from "./components/FooterMenu.jsx";
import HeaderMenu from "./components/HeaderMenu";
import MainContent from "./components/MainContent.jsx";
import "./style/App.scss";
import data from "./data.js";

function App() {
  return (
    <>
      <MainContent data={data} />
    </>
  );
}

export default App;
