import Footer from './components/Footer';
import Form from './components/Form';
import Header from './components/Header';
import Main from './components/Main';
function App() {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <Main />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
