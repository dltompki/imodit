import { BrowserRouter, Route, Routes } from "react-router-dom";
import BottomNavBar from "./stories/BottomNavBar";
import { Home } from "./stories/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learn" element={<Home />} />
        <Route path="/scan" element={<Home />} />
        <Route path="/create" element={<Home />} />
      </Routes>
      <BottomNavBar />
    </BrowserRouter>
  );
}

export default App;
