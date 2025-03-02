import { BrowserRouter, Route, Routes } from "react-router-dom";
import BottomNavBar from "./stories/BottomNavBar";
import { Home } from "./stories/Home";
import { CreateProjectHomeScreen } from "./stories/CreateProjectHomeScreen";
import { NameProjectPage } from "./stories/NameProjectPage";

export interface Step {
  title: string;
  description: string;
  id: number;
  image: string;
  otherImages: string[];
}
export interface Project {
  image: string;
  title: string;
  description: string;
  id: number;
  steps: Step[];
}

function App() {
  // eslint-disable-next-line prefer-const

  let projects: Project[] = [];
  let lastId = 0;

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
        <Route
          path="/create/name"
          element={
            <NameProjectPage
              createProject={(name: string) => {
                projects.push({
                  title: name,
                  description: "",
                  image: "",
                  id: lastId,
                  steps: [],
                });
                lastId += 1;
                return lastId;
              }}
            />
          }
        />
      </Routes>
      <BottomNavBar />
    </BrowserRouter>
  );
}

export default App;
