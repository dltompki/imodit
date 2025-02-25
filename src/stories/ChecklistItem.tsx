import React, { useState } from "react";
import { Checkbox } from "@mui/material";

interface ChecklistItemProps {
  text: string;
  defaultChecked?: boolean;
}

const ChecklistItem: React.FC<ChecklistItemProps> = ({
  text,
  defaultChecked = false,
}) => {
  const [checked, setChecked] = useState<boolean>(defaultChecked);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Checkbox
        checked={checked}
        onChange={handleChange}
        inputProps={{ "aria-label": "controlled" }}
        sx={{
          color: checked ? "primary.main" : "text.primary",
        }}
      />
      <span
        style={{
          textDecoration: checked ? "line-through" : "none", // strike-through when checked
          color: checked ? "gray" : "black", // text turns gray when checked
        }}
      >
        {text}
      </span>
    </div>
  );
};

export default ChecklistItem;
