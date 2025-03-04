import * as React from "react";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import BottomNavBar from "./BottomNavBar";
import { Topbar } from "./Topbar";
import { Project } from "../App";
import { useNavigate, useParams } from "react-router-dom";
import { Multimedia } from "./Multimedia";

interface ProjectStepsPageProps {
  projects: Project[];
  setProjects: (projects: Project[]) => void;
}

export function PublishProject(props: ProjectStepsPageProps) {
  const { id } = useParams();

  const fabStyle = {
    position: "absolute",
    bottom: 72,
    right: 16,
  };

  const project_id = parseInt(id!);

  const project = props.projects.find((project) => project.id === project_id)!;

  const navigation = useNavigate();

  const [coverImage, setCoverImage] = React.useState<string | null>(null);

  return (
    <>
      <Topbar
        title={"Publis h" + project.title}
        leftButtonText="BackIcon"
        leftButtonAction={() => {
          void navigation("/create/" + project_id);
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
        <Typography
          variant="h4"
          component="div"
          sx={{ top: 100, position: "absolute" }}
        >
          Select Cover Image
        </Typography>

        <div
          style={{
            margin: "1.5rem",
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
          }}
        >
          {project.steps.flatMap((step) => {
            return step.images.map((image) => {
              if (coverImage === image) {
                return (
                  <div
                    key={image}
                    style={{
                      border: "4px solid red",
                      borderRadius: "10px",
                      margin: "0.5rem",
                      padding: "0.5rem",
                    }}
                  >
                    <Multimedia
                      image={image}
                      onClick={() => {
                        setCoverImage(image);
                      }}
                    />
                  </div>
                );
              }
              return (
                <div
                  key={image}
                  style={{
                    borderRadius: "10px",
                    margin: "0.5rem",
                    padding: "0.5rem",
                  }}
                >
                  <Multimedia
                    image={image}
                    onClick={() => {
                      setCoverImage(image);
                    }}
                  />
                </div>
              );
            });
          })}
        </div>
      </Box>

      <Button
        color="primary"
        aria-label="add"
        variant="contained"
        disabled={coverImage === null}
        sx={fabStyle}
        onClick={() => {
          const newProject = { ...project };
          newProject.image = coverImage!;
          newProject.being_reviewed = true;

          const newProjects = props.projects.map((p) => {
            if (p.id === project_id) {
              return newProject;
            }
            return p;
          });

          props.setProjects(newProjects);

          void navigation("/create/");
        }}
      >
        Submit for Review
      </Button>
      <BottomNavBar />
    </>
  );
}
