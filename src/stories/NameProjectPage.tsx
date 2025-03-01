import { Box, CardActionArea, Fab, Stack, TextField, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import { Topbar } from "./Topbar";
import BottomNavBar from "./BottomNavBar";

import ProjectCard, { ProjectCardProps } from "./ProjectCard";
import { useNavigate } from 'react-router-dom';

export interface CreateProjectProps {
  createProject: (name: string) => number;
}

export function NameProjectPage(props: CreateProjectProps) {
  const fabStyle = {
    position: "absolute",
    bottom: 72,
    right: 16,
  };

  return (
    <>
      <Topbar title="Name your Project" leftButtonText="BackIcon" rightButtonText="Create" />
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

        <Stack spacing={2} sx={{ width: "100%" }}>
          <Typography variant="h4" align="center">
            Name your project
          </Typography>
          <Box sx={}>
            <TextField id="outlined-basic" label="Project Name" variant="outlined" type="mode"/>

          </Box>
          <Fab
            color="primary"
            aria-label="add"
            onClick={() => props.createProject("New Project")}
          >
            <AddIcon />
          </Fab>
        </Stack>
        
      </Box>
      <BottomNavBar />
    </>
  );
}
