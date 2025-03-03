import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import QrCodeIcon from "@mui/icons-material/QrCode";
import DrawIcon from "@mui/icons-material/Draw";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { Paper } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import Paths from "./flows/paths";

enum NavBarState {
  None = "/",
  Learn = "/learn",
  Create = "/create",
  Scan = Paths.scanQrCode,
}

export default function BottomNavBar() {
  const location = useLocation();

  const [value, setValue] = useState<NavBarState>(
    Object.values(NavBarState).includes(location.pathname as NavBarState)
      ? (location.pathname as NavBarState)
      : NavBarState.None,
  );

  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(_event, newValue: NavBarState) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          component={Link}
          to="/learn"
          value="/learn"
          label="Learn"
          icon={<MenuBookIcon />}
        />
        <BottomNavigationAction
          component={Link}
          to="/create"
          value="/create"
          label="Create"
          icon={<DrawIcon />}
        />
        <BottomNavigationAction
          component={Link}
          to={Paths.scanQrCode}
          value={Paths.scanQrCode}
          label="Scan"
          icon={<QrCodeIcon />}
        />
      </BottomNavigation>
    </Paper>
  );
}
