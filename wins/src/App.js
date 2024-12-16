import './App.scss';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AppRoutes from "./routes/AppRoutes";
import {BrowserRouter} from "react-router";

function App() {
  return (
      <div className="App">
          <AppRoutes />
       <Footer />
      </div>
  );
}
export default App;
