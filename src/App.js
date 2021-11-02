import "./App.css";
import Section from "./components/Section"
import data from "./assets/json/data.json"
import Scrollbar from "./components/Scrollbar";

function App() {
  return (
    <div>
      <Section title = "Emissions TV" data = {data.map((elem, index) => {
        return (
          <Scrollbar key = {index} image = {elem.images} />
        )
      })} />
      <Section />
      <Section />
      <Section />
      <Section />
      <Section />
    </div>
  );
}

export default App;
