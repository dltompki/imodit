import { Box, CardActionArea, Fab, Stack, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import { Topbar } from "./Topbar";
import BottomNavBar from "./BottomNavBar";

import { useNavigate } from "react-router-dom";

import ProjectCard, { ProjectCardProps } from "./ProjectCard";

export interface CreateProjectProps {
  projects: ProjectCardProps[];
}

export function CreateProjectHomeScreen(props: CreateProjectProps) {
  const navigation = useNavigate();

  const fabStyle = {
    position: "absolute",
    bottom: 72,
    right: 16,
  };

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
        {props.projects.length == 0 ? (
          <Typography
            variant="subtitle1"
            component="div"
            sx={{ top: 100, position: "absolute" }}
          >
            No projects yet. Click the button below to create one.
          </Typography>
        ) : (
          <></>
        )}

        <Stack
          direction="column"
          spacing={2}
          sx={{ top: 80, position: "absolute" }}
        >
          {props.projects.map((project) => (
            <CardActionArea key={project.title}>
              <ProjectCard {...project} />
            </CardActionArea>
          ))}
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
