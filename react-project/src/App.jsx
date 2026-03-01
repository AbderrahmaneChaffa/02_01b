import "./App.css";

function Header({ name, year }) {
  return (
    <header>
      <h1>My {name} React App</h1>
      <p>Copyright © {year}</p>
    </header>
  );
}
const items = [
  "Macaroni and cheese",
  "salmon with Potatoes",
  "chicken with rice",
];
function Main({ dishes }) {
  return (
    <ul>
      {dishes.map((dish) => (
        <li style={{ listStyleType: "none" }}>{dish}</li>
      ))}
    </ul>
  );
}
function App() {
  return (
    <div>
      <Header name="Abderrahmane" year={new Date().getFullYear()} />
      <Main dishes={items} />
    </div>
  );
}

export default App;
