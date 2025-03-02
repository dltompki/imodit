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
          void navigation(-1);
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
              <CardActionArea key={step.title}>
                <ProjectCard {...newStep} />
              </CardActionArea>
            );
          })}
        </Stack>

        <Fab
          color="primary"
          aria-label="add"
          sx={fabStyle}
          onClick={() => {
            void navigation("/create/name");
          }}
        >
          <AddIcon />
        </Fab>
      </Box>
      <BottomNavBar />
    </>
  );
}
