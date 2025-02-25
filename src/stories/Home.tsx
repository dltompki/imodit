import { Box, Button, Stack } from "@mui/material";
import { MenuBook, QrCodeScanner, Create } from "@mui/icons-material";
import { Topbar } from "./Topbar";
import { Link } from "react-router-dom";

export const Home: React.FC = () => {
  return (
    <div>
      <Topbar currentRoute="/home" />
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
        <Stack direction="column" spacing={2}>
          <Button
            component={Link}
            to="/learn"
            variant="contained"
            size="large"
            startIcon={<MenuBook />}
          >
            Learn
          </Button>
          <Button
            component={Link}
            to="/create"
            variant="contained"
            size="large"
            startIcon={<Create />}
          >
            Create
          </Button>
          <Button
            component={Link}
            to="/scan"
            variant="contained"
            size="large"
            startIcon={<QrCodeScanner />}
          >
            Scan
          </Button>
        </Stack>
      </Box>
    </div>
  );
};
