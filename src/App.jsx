import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";
import Hero from "./components/Hero";
function App() {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <Hero />
      <div className="bg-white relative w-full py-8 ">
        <Form />
      </div>
      <Footer />
    </div>
  );
}

export default App;
