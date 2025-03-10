import { Box, Button, Stack, Typography } from "@mui/material";

import { Topbar } from "./Topbar";
import BottomNavBar from "./BottomNavBar";

import { useNavigate } from "react-router-dom";

import ProjectCard from "./ProjectCard";
import { Project } from "../App";

interface CreateProjectProps {
  projects: Project[];
  setProjects: (projects: Project[]) => void;
}

export function CreateProjectHomeScreen(props: CreateProjectProps) {
  const navigation = useNavigate();

  function handleDeleteProject(projectToDelete: number) {
    const newProjects = props.projects.filter((project) => {
      return project.id != projectToDelete;
    });
    props.setProjects(newProjects);
  }

  return (
    <>
      <Topbar title="Your Projects" leftButtonText="HomeIcon" />
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
        }}
      >
        <Stack
          direction="column"
          spacing={2}
          sx={{ top: 80, position: "absolute" }}
        >
          {props.projects.length == 0 ? (
            <Typography variant="subtitle1" component="div">
              No projects yet. Click the button below to create one.
            </Typography>
          ) : (
            <></>
          )}
          {props.projects.map((project) => {
            if (project.being_reviewed) {
              return (
                <ProjectCard
                  key={project.id}
                  {...project}
                  description="Being Reviewed..."
                  onDelete={() => {
                    handleDeleteProject(project.id);
                  }}
                />
              );
            }
            return (
              <ProjectCard
                {...project}
                onCardClick={() => void navigation("/create/" + project.id)}
                key={project.id}
                onDelete={() => {
                  handleDeleteProject(project.id);
                }}
              />
            );
          })}
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              variant="outlined"
              sx={{ width: "fit-content" }}
              onClick={() => {
                void navigation("/create/name");
              }}
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
