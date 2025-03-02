import { BrowserRouter, Route, Routes } from "react-router-dom";
import BottomNavBar from "./stories/BottomNavBar";
import { Home } from "./stories/Home";
import { CreateProjectHomeScreen } from "./stories/CreateProjectHomeScreen";
import { NameProjectPage } from "./stories/NameProjectPage";
import { ProjectStepsPage } from "./stories/ProjectStepsPage";
import React from "react";
import { StepDetailPage } from "./stories/StepDetailPage";
import { PublishProject } from "./stories/ProjectPublishPage";

export interface Step {
  title: string;
  description: string;
  id: number;
  images: string[];
  threeDImages: string[];
  safetyEquipment: string[];
  tools: string[];
}
export interface Project {
  image: string;
  title: string;
  description: string;
  id: number;
  steps: Step[];
  being_reviewed?: boolean;
}

function App() {
  // eslint-disable-next-line prefer-const

  const [projects, setProjects] = React.useState<Project[]>([]);
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
              projects={projects}
              setProjects={setProjects}
            />
          }
        />
        <Route
          path="/create/:id"
          element={<ProjectStepsPage projects={projects} setProjects={setProjects} />}
        />
        <Route
          path="/create/:id/:stepId"
          element={<StepDetailPage projects={projects} setProjects={setProjects} />}
        />
        <Route
          path="/create/publish/:id/"
          element={<PublishProject projects={projects} setProjects={setProjects} />}
        />
      </Routes>
      <BottomNavBar />
    </BrowserRouter>
  );
}

export default App;
