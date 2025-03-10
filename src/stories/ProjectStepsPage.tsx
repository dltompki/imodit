import { Button } from "@mui/material";
import { Box, Stack, Typography } from "@mui/material";
import BottomNavBar from "./BottomNavBar";
import { Topbar } from "./Topbar";
import { Project } from "../App";
import { useNavigate, useParams } from "react-router-dom";
import ProjectCard from "./ProjectCard";

interface ProjectStepsPageProps {
  projects: Project[];
  setProjects: (projects: Project[]) => void;
}

export function ProjectStepsPage(props: ProjectStepsPageProps) {
  const { id } = useParams();

  const project_id = parseInt(id!);

  const project = props.projects.find((project) => project.id === project_id)!;

  const navigation = useNavigate();

  function handleStepDeletion(stepToDelete: number) {
    const removedStep = project.steps.filter((step) => {
      return stepToDelete != step.id;
    });
    project.steps = removedStep.map((step) => {
      if (step.id > stepToDelete) {
        step.id -= 1;
      }
      return step;
    });
    props.setProjects([...props.projects]);
  }

  return (
    <>
      <Topbar
        title={project.title}
        leftButtonText="BackIcon"
        leftButtonAction={() => {
          void navigation("/create");
        }}
        rightButtonText="Publish"
        rightButtonAction={() => {
          void navigation("/create/publish/" + project_id);
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
        }}
      >
        <Stack
          direction="column"
          spacing={2}
          sx={{ top: 80, position: "absolute" }}
        >
          {project.steps.length == 0 ? (
            <Typography variant="subtitle1" component="div">
              No steps yet. Click the button below to create one.
            </Typography>
          ) : (
            <></>
          )}
          {project.steps.map((step) => {
            const newStep = { ...step };
            newStep.title = step.id + 1 + ". " + step.title;
            return (
              <ProjectCard
                {...newStep}
                image={step.images[0]}
                onDelete={() => handleStepDeletion(step.id)}
                onCardClick={() => {
                  void navigation("/create/" + project_id + "/" + step.id);
                }}
                key={step.id}
              />
            );
          })}
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              variant="outlined"
              sx={{ width: "fit-content" }}
              onClick={() => {
                // Create new step
                const newStep = {
                  title: "",
                  description: "",
                  id: project.steps.length,
                  images: [],
                  threeDImages: [],
                  safetyEquipment: [],
                  tools: [],
                };

                // Update project
                const newProject = {
                  ...project,
                  steps: [...project.steps, newStep],
                };

                const newProjects = props.projects.map((p) => {
                  if (p.id === project_id) {
                    return newProject;
                  }
                  return p;
                });

                props.setProjects(newProjects);

                void navigation("/create/" + project_id + "/" + newStep.id);
              }}
            >
              Add Step
            </Button>
          </Box>
        </Stack>
      </Box>
      <BottomNavBar />
    </>
  );
}
