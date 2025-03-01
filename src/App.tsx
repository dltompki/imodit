import { BrowserRouter, Route, Routes } from "react-router-dom";
import BottomNavBar from "./stories/BottomNavBar";
import { Home } from "./stories/Home";
import { CreateProjectHomeScreen } from "./stories/CreateProjectHomeScreen";
import { ProjectCardProps } from "./stories/ProjectCard";

function App() {
  // eslint-disable-next-line prefer-const
  let projects: ProjectCardProps[] = [];

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learn" element={<p>learn</p>} />
        <Route path="/scan" element={<p>scan</p>} />
        <Route
          path="/create"
          element={<CreateProjectHomeScreen projects={projects} />}
        />
      </Routes>
      <BottomNavBar />
    </BrowserRouter>
  );
}

export default App;
