import React from "react";
import { Button } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

interface PaginationProps {
  leftButton?: React.ReactNode | null; // Left button can be custom or null to hide
  rightButton?: React.ReactNode | null; // Right button can be custom or null to hide
  onLeftButtonClick?: () => void;
  onRightButtonClick?: () => void;
}

const Pagination: React.FC<PaginationProps> = ({
  leftButton = (
    <Button variant="outlined" startIcon={<ChevronLeftIcon />}>
      Prev
    </Button>
  ),
  rightButton = (
    <Button variant="outlined" endIcon={<ChevronRightIcon />}>
      Next
    </Button>
  ),
  onLeftButtonClick,
  onRightButtonClick,
}) => {
  const validateButton = (button: React.ReactNode | null) => {
    if (button === null) {
      return null;
    }

    // Check if the button is a valid React element (e.g. Button)
    if (React.isValidElement(button)) {
      return button;
    }

    // If it's an invalid string or anything else, return null
    return null;
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: 20,
        width: "90%",
        display: "flex",
        justifyContent: "space-between",
        padding: "2 2px",
      }}
    >
      {/* Left Button */}
      {validateButton(leftButton) !== null && (
        <div style={{ flex: 1, display: "flex", justifyContent: "flex-start" }}>
          <div onClick={onLeftButtonClick}>{leftButton}</div>
        </div>
      )}

      {/* Right Button */}
      {validateButton(rightButton) !== null && (
        <div style={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
          <div onClick={onRightButtonClick}>{rightButton}</div>
        </div>
      )}
    </div>
  );
};

export default Pagination;
