import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Cards from "./components/Cards";
import "./styles/_main.scss";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
