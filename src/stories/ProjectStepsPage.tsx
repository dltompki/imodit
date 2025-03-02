import { CardActionArea, Fab } from "@mui/material";
import { Box, Stack, Typography } from "@mui/material";
import BottomNavBar from "./BottomNavBar";
import { Topbar } from "./Topbar";
import AddIcon from "@mui/icons-material/Add";
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

  const fabStyle = {
    position: "absolute",
    bottom: 72,
    right: 16,
  };

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
        {props.projects.length == 0 ? (
          <Typography
            variant="subtitle1"
            component="div"
            sx={{ top: 100, position: "absolute" }}
          >
            No steps yet. Click the button below to create one.
          </Typography>
        ) : (
          <></>
        )}

        <Stack
          direction="column"
          spacing={2}
          sx={{ top: 80, position: "absolute" }}
        >
          {project.steps.map((step) => {
            const newStep = { ...step };
            newStep.title = step.id + 1 + ". " + step.title;
            return (
              <CardActionArea key={step.title} onClick={() => {
                void navigation("/create/" + project_id + "/" + step.id);
              }}>
                <ProjectCard {...newStep} image={step.images[0]}/>
              </CardActionArea>
            );
          })}
        </Stack>

        <Fab
          color="primary"
          aria-label="add"
          sx={fabStyle}
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
            })

            props.setProjects(newProjects)


            void navigation("/create/" + project_id + "/" + newStep.id);
          }}
        >
          <AddIcon />
        </Fab>
      </Box>
      <BottomNavBar />
    </>
  );
}
