import { Box, Typography } from "@mui/material";

interface StepType {
  image: string;
  caption: string;
  instructions: string;
}

export const Step: React.FC<StepType> = (props: StepType) => {
  return (
    <Box sx={{ paddingTop: 3, paddingBottom: 3 }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <img src="#" />
        <Typography
          variant="h6"
          sx={{ alignSelf: "center", fontWeight: "bold" }}
        >
          {props.caption}
        </Typography>
      </Box>
      <Typography variant="body1">{props.instructions}</Typography>
    </Box>
  );
};
