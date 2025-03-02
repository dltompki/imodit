import { Box, Stack, TextField, Typography } from "@mui/material";
import { Topbar } from "./Topbar";
import BottomNavBar from "./BottomNavBar";
import { useNavigate } from "react-router-dom";

export interface CreateProjectProps {
  createProject: (name: string) => number;
}

export function NameProjectPage(props: CreateProjectProps) {
  const navigation = useNavigate();

  return (
    <>
      <Topbar
        title="Name your Project"
        leftButtonText="BackIcon"
        rightButtonText="Create"
        rightButtonAction={() => {
          console.log("Create project");

          // We know this is a text field
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-assignment
          const name = (document.getElementById("project-name") as any).value;
          if (name) {
            console.log();

            // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
            const id = props.createProject(name);
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
