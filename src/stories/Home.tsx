import { Box, Button, Stack } from "@mui/material";
import { MenuBook, QrCodeScanner, Create } from "@mui/icons-material";

export const Home: React.FC = () => {
  return (
    <Box
      sx={{
        height: "100vh",
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
        <Button variant="contained" size="large" startIcon={<QrCodeScanner />}>
          Scan
        </Button>
      </Stack>
    </Box>
  );
};
