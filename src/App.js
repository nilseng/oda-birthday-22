import eagle from "./eagle.jpeg";

function App() {
  return (
    <div className="App">
      <header
        className="App-header"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          paddingTop: "1rem",
        }}
      >
        <div>
          <img src={eagle} alt="eagle" style={{ maxWidth: "100%" }} />
          <h5>Gratulerer med dagen, gamle ørn!</h5>
          <p>Håper du får en utroooooooolig fin bursdag.</p>
          <p>Sjekk Vippsen din for gave.</p>
          <p>
            <small>(Bildet har jeg funnet selv på Google.)</small>
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
