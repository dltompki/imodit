import { BrowserRouter, Route, Routes } from "react-router-dom";
import BottomNavBar from "./stories/BottomNavBar";
import { Home } from "./stories/Home";
import { CreateProjectHomeScreen } from "./stories/CreateProjectHomeScreen";
import { ProjectCardProps } from "./stories/ProjectCard";
import { NameProjectPage } from "./stories/NameProjectPage";
import { useMemo } from "react";
import { createTheme, ThemeProvider } from "@mui/material";

function App() {
  // eslint-disable-next-line prefer-const
  let projects: ProjectCardProps[] = [];
  let lastId = 0;

  const theme = createTheme({
    defaultColorScheme: "light",
  });

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
