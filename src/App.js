import "./App.css";
import Logo from "./components/Logo"
import data from "./assets/json/data.json"
import Section from "./components/Section"

function App() {
  return (
    <div>
      <Logo/>
      {data.map((elem, index) => {
        return (
          <Section key = {index} title = {elem.category} data = {elem.images} />
        );
      })}
    </div>
  );
}

export default App;
