import React from "react";
import { Box, Stack, TextField, Typography, Button } from "@mui/material";
import { Topbar } from "./Topbar";
import BottomNavBar from "./BottomNavBar";
import { useNavigate } from "react-router-dom";
import { Project } from "../App";

export interface CreateProjectProps {
  projects: Project[];
  setProjects: (projects: Project[]) => void;
}

export function NameProjectPage(props: CreateProjectProps) {
  const navigation = useNavigate();
  const [projectName, setProjectName] = React.useState<string>("");

  // Handle input change
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProjectName(e.target.value);
  };

  // Create project logic
  const handleCreateProject = () => {
    if (projectName) {
      const id = props.projects.length + 1;
      const newProject = {
        id: id,
        title: projectName,
        steps: [],
        image: "",
        description: "",
      };

      props.setProjects([...props.projects, newProject]);
      void navigation("/create/" + id);
    }
  };

  return (
    <>
      <Topbar
        title="Name your Project"
        leftButtonText="BackIcon"
        leftButtonAction={() => {
          void navigation("/create");
        }}
      />
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          position: "fixed",
          top: 0,
          left: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <Stack spacing={2} sx={{ width: "100%" }}>
          <Typography
            variant="h4"
            align="center"
            color="black"
            sx={{ top: 0, fontSize: "1.9rem" }}
          >
            Name Your Project
          </Typography>
          <Box
            sx={{
              alignContent: "center",
              display: "flex",
              justifyContent: "center",
              width: "100%",
              paddingTop: 1,
            }}
          >
            <TextField
              id="project-name"
              label="Project Name"
              variant="outlined"
              value={projectName}
              onChange={handleNameChange}
              sx={{ minWidth: "75%" }}
            />
          </Box>

          {/* Create Project Button*/}
          <Box
            sx={{ display: "flex", justifyContent: "center", paddingTop: 1 }}
          >
            <Button
              variant="contained"
              color="primary"
              disabled={!projectName}
              onClick={handleCreateProject}
            >
              Create Project
            </Button>
          </Box>
        </Stack>
      </Box>
      <BottomNavBar />
    </>
  );
}
