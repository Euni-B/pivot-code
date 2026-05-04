import { Routes, Route } from "react-router-dom";
import Home from "./screens/home/Home";
import Details from "./screens/details/Details";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* :means parameter */}
      <Route path="/product/:id" element={<Details />} />
    </Routes>
  );
}

export default App;