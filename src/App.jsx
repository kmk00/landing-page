import Footer from './components/Footer';
import Form from './components/Form';
import Header from './components/Header';
import Main from './components/Main';
function App() {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <Main />
      <div className="bg-white w-full py-8 md:py-20">
        <Form />
      </div>
      <Footer />
    </div>
  );
}

export default App;
