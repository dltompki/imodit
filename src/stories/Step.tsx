import { Box, Typography } from "@mui/material";

interface StepType {
  image?: string;
  caption?: string;
  instructions?: string;
  title?: string;
}

export const Step: React.FC<StepType> = (props: StepType) => {
  return (
    <Box sx={{ paddingTop: 3, paddingBottom: 3, width: "100vw" }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box sx={{ justifyContent: "center" }}>
          <img src={props.image} width="100%" style={{ alignSelf: "center" }} />
        </Box>
        <Typography variant="h5" sx={{ alignSelf: "center", marginBottom: 1 }}>
          {props.title}
        </Typography>
        <Typography
          variant="h6"
          sx={{ alignSelf: "center", fontWeight: "bold" }}
        >
          {props.caption}
        </Typography>
      </Box>
      <Typography variant="body1" sx={{ textAlign: "left", paddingX: "5%" }}>
        {props.instructions}
      </Typography>
    </Box>
  );
};
