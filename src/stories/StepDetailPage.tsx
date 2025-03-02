import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Button, CardActionArea, Checkbox, Fab, Modal } from "@mui/material";
import { Stack, Typography } from "@mui/material";
import BottomNavBar from "./BottomNavBar";
import { Topbar } from "./Topbar";
import AddIcon from "@mui/icons-material/Add";
import { Project } from "../App";
import { useNavigate, useParams } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import { ModifyableList } from './ModifyableList';
import { Multimedia } from './Multimedia';

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

  const [safetyEquipment, setSafetyEquipment] = React.useState<string[]>(step.safetyEquipment);
  const [tools, setTools] = React.useState<string[]>(step.tools);
  const [imageModalOpen, setImageModalOpen] = React.useState<boolean>(false);
  const [images, setImages] = React.useState<string[]>(step.images);
  const [threeDImages, setThreeDImages] = React.useState<string[]>(step.threeDImages);

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

          const description = (document.getElementById("step-description") as HTMLInputElement).value;
          
          const newStep = {
            title: stepTitle,
            description: description,
            id: step.id,
            images: images,
            threeDImages: threeDImages,
            safetyEquipment: safetyEquipment,
            tools: tools,
          }

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
         <Box sx={{ display: 'flex', flexWrap: 'wrap', m: 1, rowGap: 20, height: '80vh', overflow: 'scroll' }}>
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
              placeholder="Add Safety Equipment"/>

            <ModifyableList
              equpmentList={tools}
              setEquipmentList={setTools}
              sectionHeading="Tools for this Step" 
              placeholder="Add Tools"/>

            <Typography variant="h6" align="left" color="gray" sx={{ m: 3 }}>
              Multimedia
            </Typography>

            <div style={{ margin: "1.5rem", display: 'grid', gridTemplateColumns: "1fr 1fr 1fr"}}>
              
              {images.map((image) => 
                ( <Multimedia image={image} />))}
              {threeDImages.map((image) => 
                ( <Multimedia image={image} threeD />))}

              <Multimedia onClick={() => {setImageModalOpen(true)}} />

            </div>
                        
          </div>
        </Box>
      </Box>
      <Modal
        open={imageModalOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: "70%",
                bgcolor: 'background.paper',
                border: '2px solid #000',
                boxShadow: 24,
                p: 4,
              }}>
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{paddingBottom: 2}}>
            Add Image
          </Typography>
          <Stack sx={{m: 2}}>
            <TextField id="imageurl-input" label="Image URL" />
            <Box sx={{display: "flex", alignItems: "center", paddingTop: 2}}>
              <Typography>Is 3D?</Typography>
              <Checkbox id="is3D-input" />
              <Button variant="contained" sx={{marginLeft: "auto"}} onClick={() => {
                // get image url
                const imageUrl = (document.getElementById("imageurl-input") as HTMLInputElement).value;
                const is3D = (document.getElementById("is3D-input") as HTMLInputElement).checked;
                
                if (is3D) {
                  setThreeDImages([...threeDImages, imageUrl]);
                }
                else {
                  setImages([...images, imageUrl]);
                }


                setImageModalOpen(false);
              }}>Save</Button>
            </Box>
          </Stack>
        </Box>
      </Modal>
      <BottomNavBar />
    </>
  );
}