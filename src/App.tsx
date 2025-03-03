import { BrowserRouter, Route, Routes } from "react-router-dom";
import BottomNavBar from "./stories/BottomNavBar";
import { Home } from "./stories/Home";
import { CreateProjectHomeScreen } from "./stories/CreateProjectHomeScreen";
import { NameProjectPage } from "./stories/NameProjectPage";
import { ProjectStepsPage } from "./stories/ProjectStepsPage";
import React from "react";
import { StepDetailPage } from "./stories/StepDetailPage";
import { PublishProject } from "./stories/ProjectPublishPage";
import { ScanQrCodeScreen } from "./stories/flows/do/ScanQrCodeScreen";
import Paths from "./stories/flows/paths";
import BeginInstructionScreen from "./stories/flows/do/BeginInstructionScreen";

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
  const [projects, setProjects] = React.useState<Project[]>([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learn" element={<p>learn</p>} />
        <Route
          path="/create"
          element={<CreateProjectHomeScreen projects={projects} />}
        />
        <Route
          path="/create/name"
          element={
            <NameProjectPage projects={projects} setProjects={setProjects} />
          }
        />
        <Route
          path="/create/:id"
          element={
            <ProjectStepsPage projects={projects} setProjects={setProjects} />
          }
        />
        <Route
          path="/create/:id/:stepId"
          element={
            <StepDetailPage projects={projects} setProjects={setProjects} />
          }
        />
        <Route
          path="/create/publish/:id/"
          element={
            <PublishProject projects={projects} setProjects={setProjects} />
          }
        />
        <Route path={Paths.scanQrCode} element={<ScanQrCodeScreen />} />
        <Route
          path={Paths.instructionBegin}
          element={<BeginInstructionScreen />}
        />
      </Routes>
      <BottomNavBar />
    </BrowserRouter>
  );
}

export default App;
