import { useState } from "react";
import {
  Typography,
  List,
  ListItem,
  IconButton,
  TextField,
  Button,
  Box,
} from "@mui/material";
import { Delete, Add } from "@mui/icons-material";

interface ModifyableListProps {
  sectionHeading: string;
  equpmentList: string[];
  setEquipmentList: (equipment: string[]) => void;
  placeholder: string;
  onAdd: (value: string) => void;
}

export function ModifyableList(props: ModifyableListProps) {
  const [newItem, setNewItem] = useState("");

  const handleAdd = () => {
    props.onAdd(newItem); // Using the onAdd function passed down from parent
    setNewItem("");
  };

  const handleRemove = (index: number) => {
    props.setEquipmentList(props.equpmentList.filter((_, i) => i !== index));
  };

  return (
    <>
      <Typography variant="h6" align="left" color="gray" sx={{ m: 3 }}>
        {props.sectionHeading}
      </Typography>

      <List sx={{ m: 3 }}>
        {props.equpmentList.map((item, index) => (
          <ListItem
            key={index}
            secondaryAction={
              <IconButton edge="end" onClick={() => handleRemove(index)}>
                <Delete />
              </IconButton>
            }
          >
            {item}
          </ListItem>
        ))}
      </List>

      <Box sx={{ m: 1, display: "flex", alignItems: "center" }}>
        <TextField
          label={props.placeholder}
          value={newItem}
          size="small"
          onChange={(e) => setNewItem(e.target.value)}
          sx={{ m: 3, width: "200px" }}
        />
        <Button
          variant="contained"
          startIcon={<Add />}
          sx={{ height: 30 }}
          onClick={handleAdd}
        >
          Add
        </Button>
      </Box>
    </>
  );
}
