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
          backgroundColor: "white",
        }}
      >

        <Stack spacing={2} sx={{ width: "100%" }}>
          <Typography variant="h4" align="center" color="black" sx={{top: 0}}>
            Name your project
          </Typography>
          <Box sx={{ alignContent: "center", display: "flex", justifyContent: "center" }}>
            <TextField id="outlined-basic" label="Project Name" variant="outlined"/>
          </Box>
        </Stack>
        
      </Box>
      <BottomNavBar />
    </>
  );
}
