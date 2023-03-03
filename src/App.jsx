import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";
import Hero from "./components/Hero";
function App() {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <Hero />
      <div className="bg-white w-screen min-w-fit py-8 md:py-20">
        <Form />
      </div>
      <Footer />
    </div>
  );
}

export default App;
