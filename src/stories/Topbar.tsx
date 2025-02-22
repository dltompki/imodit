import { ArrowBackIos, Home } from "@mui/icons-material";
import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";

interface TopbarProps {
  title: string;
}

export const Topbar: React.FC<TopbarProps> = (props: TopbarProps) => {
  return (
    <AppBar>
      <Toolbar sx={{ flex: 1, justifyContent: "space-between" }}>
        <Typography>
          <IconButton>{props.back ? <ArrowBackIos /> : <Home />}</IconButton>
        </Typography>
        <Typography>{props.title}</Typography>
        <Button variant="text" sx={{ color: "white" }}>
          Cancel
        </Button>
      </Toolbar>
    </AppBar>
  );
};
