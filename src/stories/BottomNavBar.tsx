import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import QrCodeIcon from "@mui/icons-material/QrCode";
import DrawIcon from "@mui/icons-material/Draw";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { Paper } from "@mui/material";

enum NavBarState {
  None = -1,
  Learn = 0,
  Create = 1,
  Scan = 2,
}

export default function BottomNavBar() {
  // TODO: Implement logic to determine which page we are on
  const selected = NavBarState.None;

  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation
        showLabels
        value={selected}
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        onChange={(_event, _newValue: NavBarState) => {
          // Need to implement logic to determine which page to navigate to
        }}
      >
        <BottomNavigationAction label="Learn" icon={<MenuBookIcon />} />
        <BottomNavigationAction label="Create" icon={<DrawIcon />} />
        <BottomNavigationAction label="Scan" icon={<QrCodeIcon />} />
      </BottomNavigation>
    </Paper>
  );
}
