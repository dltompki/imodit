import { Box, Button, Stack } from "@mui/material";
import { MenuBook, QrCodeScanner, Create } from "@mui/icons-material";
import { Topbar } from "./Topbar";

export const Home: React.FC = () => {
  return (
    <div>
      <Topbar title="Getting Started" />
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
          <Button variant="contained" size="large" startIcon={<Create />}>
            Create
          </Button>
          <Button variant="contained" size="large" startIcon={<MenuBook />}>
            Learn
          </Button>
          <Button
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
