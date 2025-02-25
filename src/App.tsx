import { BrowserRouter, Route, Routes } from "react-router-dom";
import BottomNavBar from "./stories/BottomNavBar";
import { Home } from "./stories/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learn" element={<p>learn</p>} />
        <Route path="/scan" element={<p>scan</p>} />
        <Route path="/create" element={<p>create</p>} />
      </Routes>
      <BottomNavBar />
    </BrowserRouter>
  );
}

export default App;
