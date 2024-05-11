import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Skills></Skills>
      <About></About>
      <Projects></Projects>
    </>
  );
};
export default App;
