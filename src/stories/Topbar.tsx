import { ArrowBackIos, Home } from "@mui/icons-material";
import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";

import { useNavigate } from "react-router-dom";
interface TopbarProps {
  rightButtonText?: string;
  rightButtonAction?: () => void;

  // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
  leftButtonText?: string | "HomeIcon" | "BackIcon";
  leftButtonAction?: () => void;

  title: string;
}

export const Topbar: React.FC<TopbarProps> = (props: TopbarProps) => {
  const navigate = useNavigate();

  let leftButton = <Typography>{props.leftButtonText}</Typography>;

  if (props.leftButtonText === "HomeIcon") {
    leftButton = <Home />;
  } else if (props.leftButtonText === "BackIcon") {
    leftButton = <ArrowBackIos />;
  }

  let leftButtonAction = () => {};

  if (props.leftButtonAction) {
    leftButtonAction = props.leftButtonAction;
  } else {
    if (props.leftButtonText === "HomeIcon") {
      leftButtonAction = () => {
        void navigate("/");
      };
    } else if (props.leftButtonText === "BackIcon") {
      leftButtonAction = () => {
        void navigate(-1);
      };
    }
  }

  return (
    <AppBar>
      <Toolbar sx={{ flex: 1, justifyContent: "space-between" }}>
        <Typography>
          <IconButton onClick={leftButtonAction}>{leftButton}</IconButton>
        </Typography>
        <Typography>{props.title}</Typography>
        <Button
          variant="text"
          sx={{ color: "white" }}
          onClick={props.rightButtonAction ? props.rightButtonAction : () => {}}
        >
          {props.rightButtonText}
        </Button>
      </Toolbar>
    </AppBar>
  );
};
