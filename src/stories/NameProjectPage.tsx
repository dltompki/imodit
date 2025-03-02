import { Box, Stack, TextField, Typography } from "@mui/material";
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

  return (
    <>
      <Topbar
        title="Name your Project"
        leftButtonText="BackIcon"
        leftButtonAction={() => {
          void navigation("/create");
        }}
        rightButtonText="Create"
        rightButtonAction={() => {
          console.log("Create project");

          const name = (
            document.getElementById("project-name") as HTMLInputElement
          ).value;
          if (name) {
            const id = props.projects.length + 1;
            const newProject = {
              id: id,
              title: name,
              steps: [],
              image: "",
              description: "",
            };

            props.setProjects([...props.projects, newProject]);

            void navigation("/create/" + id);
          }
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
          <Typography variant="h4" align="center" color="black" sx={{ top: 0 }}>
            Name your project
          </Typography>
          <Box
            sx={{
              alignContent: "center",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <TextField
              id="project-name"
              label="Project Name"
              variant="outlined"
            />
          </Box>
        </Stack>
      </Box>
      <BottomNavBar />
    </>
  );
}
