import { ArrowBackIos, Home } from "@mui/icons-material";
import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";

interface TopbarProps {
  currentRoute: string;
  backRoute?: string;
}

export const Topbar: React.FC<TopbarProps> = (props: TopbarProps) => {
  const pages = props.currentRoute.split("/");
  const title =
    pages[pages.length - 1] == ""
      ? ""
      : `${pages[pages.length - 1].charAt(0).toUpperCase() + pages[pages.length - 1].substring(1)}`;
  return (
    <AppBar>
      <Toolbar sx={{ flex: 1, justifyContent: "space-between" }}>
        <Typography>
          <IconButton>
            {props.backRoute ? <ArrowBackIos /> : <Home />}
          </IconButton>
        </Typography>
        <Typography>{title}</Typography>
        <Button variant="text" sx={{ color: "white" }}>
          Cancel
        </Button>
      </Toolbar>
    </AppBar>
  );
};
