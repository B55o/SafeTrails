import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Information } from "./pages/Information";
import { Description } from "./pages/Description";
import { WeatherInfo } from "./pages/Weather";
import { AddEvent } from "./pages/AddEvent";
import { WelcomeScreen } from "./pages/Welcome";
import AuthRoute from "./components/AuthRoute";
import { Equipment } from "./pages/Equipment";

function App() {
  
  return (
      <div className="div">
        <Routes>
          <Route path="/" element={<WelcomeScreen/>} />
          <Route path="/home" element={<AuthRoute><Home /></AuthRoute>} />
          <Route path="/about" element={<About />} />
          <Route path="/information" element={<Information />} />
          <Route path="/description" element ={<Description />} />
          <Route path="/weather" element ={<WeatherInfo />} />
          <Route path="/addEvent" element ={<AddEvent/>} />
          <Route path="/equipment" element = {<Equipment />} />
        </Routes>
      </div>
  );
}

export default App;
