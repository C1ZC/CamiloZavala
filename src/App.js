// Importing React and necessary components
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Technologies } from "./components/Technologies";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Projects />
      <Technologies />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
