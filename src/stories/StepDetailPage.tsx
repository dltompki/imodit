import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Modal, Snackbar, Alert } from "@mui/material";
import { Stack, Typography } from "@mui/material";
import BottomNavBar from "./BottomNavBar";
import { Topbar } from "./Topbar";
import { Project } from "../App";
import { useNavigate, useParams } from "react-router-dom";
import { ModifyableList } from "./ModifyableList";
import { Multimedia } from "./Multimedia";
import ImageWithClose from "./ImageWithClose";
import { imageGallery } from "./ImageStorage";

interface ProjectStepsPageProps {
  projects: Project[];
  setProjects: (projects: Project[]) => void;
}

export function StepDetailPage(props: ProjectStepsPageProps) {
  const { id, stepId } = useParams();

  const project_id = parseInt(id!);

  const project = props.projects.find((project) => project.id === project_id)!;

  const step = project.steps.find((step) => step.id === parseInt(stepId!))!;

  const navigation = useNavigate();

  const [stepTitle, setStepTitle] = React.useState(step?.title || "");
  const [description, setDescription] = React.useState(step?.description || "");

  const [safetyEquipment, setSafetyEquipment] = React.useState<string[]>(
    step.safetyEquipment,
  );
  const [tools, setTools] = React.useState<string[]>(step.tools);
  const [imageModalOpen, setImageModalOpen] = React.useState<boolean>(false);
  const [images, setImages] = React.useState<string[]>(step.images);

  const [snackbarOpen, setSnackbarOpen] = React.useState(false); // Snackbar state
  const [snackbarMessage, setSnackbarMessage] = React.useState(""); // Snackbar message

  const handleAddSafetyEquipment = (value: string) => {
    if (value.trim() === "") {
      setSnackbarMessage("Please enter a safety equipment item!");
      setSnackbarOpen(true);
      return;
    }
    setSafetyEquipment([...safetyEquipment, value]);
  };

  const handleAddTool = (value: string) => {
    if (value.trim() === "") {
      setSnackbarMessage("Please enter a tool!");
      setSnackbarOpen(true);
      return;
    }
    setTools([...tools, value]);
  };

  const handleSnackbarClose = (
    _: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  return (
    <>
      <Topbar
        title={stepTitle}
        leftButtonText="Cancel"
        rightButtonText="Save"
        leftButtonAction={() => {
          void navigation("/create/" + project_id);
        }}
        rightButtonAction={() => {
          const description = (
            document.getElementById("step-description") as HTMLInputElement
          ).value;

          const newStep = {
            title: stepTitle,
            description: description,
            id: step.id,
            images: images,
            threeDImages: [],
            safetyEquipment: safetyEquipment,
            tools: tools,
          };

          const newSteps = project.steps.map((s) => {
            if (s.id === step.id) {
              return newStep;
            }
            return s;
          });

          const newProject = {
            ...project,
            steps: newSteps,
          };

          const newProjects = props.projects.map((p) => {
            if (p.id === project_id) {
              return newProject;
            }
            return p;
          });

          props.setProjects(newProjects);

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
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            m: 1,
            rowGap: 20,
            height: "80vh",
            overflow: "scroll",
          }}
        >
          <div>
            <TextField
              label="Step Name"
              margin="normal"
              fullWidth
              value={stepTitle}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setStepTitle(event.target.value);
              }}
            />
            <TextField
              id="step-description"
              margin="normal"
              fullWidth
              label="Step Description"
              multiline
              rows={4}
              value={description}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setDescription(event.target.value);
              }}
            />

            <ModifyableList
              equpmentList={safetyEquipment}
              setEquipmentList={setSafetyEquipment}
              sectionHeading="Safety Equipment for this Step"
              placeholder="Add Safety Equipment"
              onAdd={handleAddSafetyEquipment}
            />

            <ModifyableList
              equpmentList={tools}
              setEquipmentList={setTools}
              sectionHeading="Tools for this Step"
              placeholder="Add Tools"
              onAdd={handleAddTool}
            />

            <Typography variant="h6" align="left" color="gray" sx={{ m: 3 }}>
              Multimedia
            </Typography>

            <div
              style={{
                margin: "1.5rem",
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
              }}
            >
              {images.map((image) => (
                <ImageWithClose
                  key={image}
                  src={image}
                  alt="no"
                  onClose={() => {
                    setImages(images.filter((i) => i !== image));
                  }}
                />
              ))}

              <Multimedia
                onClick={() => {
                  setImageModalOpen(true);
                }}
              />
            </div>
          </div>
        </Box>
      </Box>

      {/* Snackbar for feedback */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
      >
        <Alert severity="error" variant="filled" sx={{ width: "100%" }}>
          {snackbarMessage}
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
              {imageGallery.map((imageUrl, index) => (
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
