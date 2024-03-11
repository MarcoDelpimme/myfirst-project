import logo from "./logo.svg";
import "./App.css";
import "./Components/ButtonComponent";
import ButtonComponents from "./Components/ButtonComponent";
import ImageComponent from "./Components/ImageComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>

        <ImageComponent src="https://www.copahost.com/blog/wp-content/uploads/2019/07/imgsize2.png" alt="newyork" />
        <ImageComponent
          src="https://images.hdqwalls.com/download/spiderman-outside-building-4k-ef-1920x1080.jpg"
          alt="spidy"
        />
        <ButtonComponents text="ciao" />
        <ButtonComponents text="attiva" />
        <ButtonComponents text="disattiva" />
        <ButtonComponents text="spegni" />
      </header>
    </div>
  );
}

export default App;
