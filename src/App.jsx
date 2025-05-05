import "./App.css";
import Counter from "./components/Counter";
import DemoClass from "./components/DemoClass";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Timer from "./components/Timer";

function App() {
  const data = () => {
    alert("Form Submitted");
  };
  return (
    <>
      <Navbar />
      <Hero />
      <DemoClass mydata={data} />
      <Counter />
      <Timer />
      <Footer />
    </>
  );
}

export default App;
