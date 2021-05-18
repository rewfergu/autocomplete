import "./styles.css";
import Typeahead from "./Typeahead";
import names from "./data.json";

export default function App() {
  return (
    <div className="App">
      <h1>React Typeahead component</h1>
      <h2>Default</h2>
      <Typeahead
        className="typeahead-input"
        data={names.map((item) => `${item.first_name} ${item.last_name}`)}
        InputComponent={(props) => <input className="testInput" {...props} />}
        OptionComponent={(props) => (
          <button {...props} className="testButton">
            {props.children}
          </button>
        )}
        newOption={true}
        NewOptionComponent={(props) => (
          <button
            className="newOptionButton"
            {...props}
            onClick={() => {
              props.onClick();
              console.log("this is a new click", props.children);
            }}
          >
            New Item: {props.children}
          </button>
        )}
      />
      <h2>Styled</h2>
      <Typeahead
        className="typeahead-input"
        data={names.map((item) => `${item.first_name} ${item.last_name}`)}
        InputComponent={(props) => <input className="testInput" {...props} />}
        OptionComponent={(props) => (
          <button {...props} className="testButton">
            {props.children}
          </button>
        )}
        newOption={true}
        NewOptionComponent={(props) => (
          <button
            className="newOptionButton"
            {...props}
            onClick={() => {
              props.onClick();
              console.log("this is a new click", props.children);
            }}
          >
            New Item: {props.children}
          </button>
        )}
      />
    </div>
  );
}
