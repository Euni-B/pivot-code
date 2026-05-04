import { Routes, Route } from "react-router-dom";
import Home from "./Screens/Home";
import Details from "./Screens/Details";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<Details />} />
    </Routes>
  );
}

export default App;