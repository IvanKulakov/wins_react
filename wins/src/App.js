import './App.scss';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
      <div className="App">
       <Header />
       <AppRoutes />
       <Footer />
      </div>
  );
}

export default App;
