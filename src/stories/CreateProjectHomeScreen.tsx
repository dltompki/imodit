import { Box, Button, CardActionArea, Fab, Stack, Typography } from "@mui/material";
import { MenuBook, QrCodeScanner, Create } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";

import { Topbar } from "./Topbar";
import BottomNavBar from "./BottomNavBar";

import ProjectCard, { ProjectCardProps } from "./ProjectCard";

interface CreateProjectProps {
    projects: ProjectCardProps[];

}

export function CreateProjectHomeScreen(props: CreateProjectProps) {

    const fabStyle = {
        position: 'absolute',
        bottom: 72,
        right: 16,
      };

    return <>
    <Topbar currentRoute="/home" />
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
        { props.projects.length == 0 ?
            <Typography
            variant="subtitle1"
            component="div"
            sx={{ color: 'text.secondary', top: 100,  position: "absolute"}}
          >
            No projects yet. 
            Click the button below to create one.
          </Typography>
        : <></>}

        <Stack direction="column" spacing={2} sx={{ top: 80, position: "absolute"}}>
            { props.projects.map((project) => 
            <CardActionArea>
                <ProjectCard {...project} />
            </CardActionArea>
            )}
        </Stack>
        
    <Fab color="primary" aria-label="add" sx={fabStyle}>
        <AddIcon />
    </Fab>
    </Box>
    <BottomNavBar />
  </>
}