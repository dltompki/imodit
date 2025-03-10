import * as React from "react";
import Box from "@mui/material/Box";
import { Alert, Button, Modal, Snackbar, Stack } from "@mui/material";
import { Typography } from "@mui/material";
import BottomNavBar from "./BottomNavBar";
import { Topbar } from "./Topbar";
import { Project } from "../App";
import { useNavigate, useParams } from "react-router-dom";
import { Multimedia } from "./Multimedia";
import { imageGallery } from "./ImageStorage";

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
  const [imageModalOpen, setImageModalOpen] = React.useState<boolean>(false);
  const [images, setImages] = React.useState<string[]>(
    project.steps.flatMap((step) => step.images),
  );

  // Snackbar state
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);

  // Handle Snackbar close
  const handleSnackbarClose = (
    _: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  const handleSubmit = () => {
    if (coverImage === null) {
      setSnackbarOpen(true); // Show Snackbar if no cover image is selected
      return;
    }

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
  };

  return (
    <>
      <Topbar
        title={"Publish " + project.title}
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
          {images.map((image) => {
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
          })}
          <div
            style={{
              borderRadius: "10px",
              margin: "0.5rem",
              padding: "0.5rem",
            }}
          >
            <Multimedia
              onClick={() => {
                setImageModalOpen(true);
              }}
            />
          </div>
        </div>
      </Box>

      <Button
        color="primary"
        aria-label="add"
        variant="contained"
        //disabled={coverImage === null}
        sx={fabStyle}
        onClick={handleSubmit}
      >
        Submit for Review
      </Button>

      {/* Snackbar for feedback */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={2000}
        onClose={handleSnackbarClose}
      >
        <Alert severity="error" variant="filled" sx={{ width: "100%" }}>
          Please select a cover image before submitting!
        </Alert>
      </Snackbar>

      <Modal
        open={imageModalOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "70%",
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ paddingBottom: 2 }}
          >
            Select an Image
          </Typography>
          <Stack sx={{ m: 2, maxHeight: 400, overflowY: "auto" }}>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
                gap: 2,
              }}
            >
              {imageGallery.map((imageUrl: string, index: number) => (
                <Box
                  key={index}
                  sx={{
                    position: "relative",
                    cursor: "pointer",
                    border: "2px solid transparent",
                    "&:hover": { border: "2px solid #000" },
                  }}
                  onClick={() => {
                    setImageModalOpen(false);
                    setImages([...images, imageUrl]);
                  }}
                >
                  <img
                    src={imageUrl}
                    alt={`Image ${index}`}
                    style={{ width: "100%", borderRadius: 4 }}
                  />
                </Box>
              ))}
            </Box>
          </Stack>
          <Button
            variant="outlined"
            sx={{ mt: 2, width: "100%" }}
            onClick={() => setImageModalOpen(false)}
          >
            Cancel
          </Button>
        </Box>
      </Modal>
      <BottomNavBar />
    </>
  );
}
