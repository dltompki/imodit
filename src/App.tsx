import { BrowserRouter, Route, Routes } from "react-router-dom";
import BottomNavBar from "./stories/BottomNavBar";
import { Home } from "./stories/Home";
import { CreateProjectHomeScreen } from "./stories/CreateProjectHomeScreen";
import { NameProjectPage } from "./stories/NameProjectPage";
import { ProjectStepsPage } from "./stories/ProjectStepsPage";
import React from "react";
import { StepDetailPage } from "./stories/StepDetailPage";
import { PublishProject } from "./stories/ProjectPublishPage";

import { SelectCarPage } from "./stories/SelectCarPage";
import { SystemSelectPage } from "./stories/SystemSelectPage";
import { LearnGuidePage } from "./stories/LearnGuidePage";
import { SubsystemSelectPage } from "./stories/SubsystemPage";

import { ScanQrCodeScreen } from "./stories/flows/do/ScanQrCodeScreen";
import Paths from "./stories/flows/paths";
import BeginInstructionScreen from "./stories/flows/do/BeginInstructionScreen";
import CaptureSafteyEquipmentScreen from "./stories/flows/do/CaptureSafteyEquipmentScreen";
import StepPage from "./stories/flows/do/StepPage";
import CongratsShareScreen from "./stories/flows/do/CongratsShareScreen";
import RatingFeedbackScreen from "./stories/flows/do/RatingFeedbackScreen";

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
        <Route path="/learn" element={<SelectCarPage />} />
        <Route path="/scan" element={<p>scan</p>} />

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

        <Route
          path="/learn/:carId"
          element={<SystemSelectPage></SystemSelectPage>}
        ></Route>
        <Route
          path="/learn/:carId/:systemId"
          element={<SubsystemSelectPage></SubsystemSelectPage>}
        ></Route>
        <Route
          path="/learn/:carId/:systemId/:subsystemId"
          element={<LearnGuidePage></LearnGuidePage>}
        ></Route>

        <Route path={Paths.scanQrCode} element={<ScanQrCodeScreen />} />
        <Route
          path={Paths.instructionBegin}
          element={<BeginInstructionScreen />}
        />
        <Route
          path={Paths.instructionSaftey}
          element={<CaptureSafteyEquipmentScreen />}
        />
        <Route
          path={Paths.stepOne}
          element={
            <StepPage
              previous={Paths.instructionSaftey}
              next={Paths.stepTwo}
              title="Step 1: Remove the Radiator"
              caption="the radiator is pictured in yellow"
              instructions="Disconnect the upper and lower radiator hoses, then detach any electrical connections, such as the cooling fan wiring. Remove the radiator mounting bolts or brackets, and carefully lift the radiator out of the engine bay."
              image="http://www.movinggraphics.ca/600x450/Car-RWD-Exploded.jpg"
            />
          }
        />
        <Route
          path={Paths.stepTwo}
          element={
            <StepPage
              previous={Paths.stepOne}
              next=""
              title="Step 2: Remove the Air Intake System"
              caption=""
              instructions="Unclip or unbolt the air filter housing and remove the air filter. Loosen the clamps securing the intake tube and disconnect any attached sensors or hoses. Carefully pull the intake tube away from the throttle body and remove the entire assembly."
              image="https://i.pinimg.com/originals/3e/5d/3c/3e5d3cbd0bddfc3042e0c6a2921ec58e.jpg"
            />
          }
        />
        <Route
          path={Paths.endOfInstruction}
          element={<CongratsShareScreen />}
        />
        <Route path={Paths.rate} element={<RatingFeedbackScreen />} />
      </Routes>
      <BottomNavBar />
    </BrowserRouter>
  );
}

export default App;
