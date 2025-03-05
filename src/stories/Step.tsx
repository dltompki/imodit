import { Box, Typography } from "@mui/material";

interface StepType {
  image?: string;
  caption?: string;
  instructions?: string;
  title?: string;
}

export const Step: React.FC<StepType> = (props: StepType) => {
  return (
    <Box sx={{ paddingTop: 3, paddingBottom: 3 }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <img
          src={props.image}
          width={250}
          height={250}
          style={{ alignSelf: "center" }}
        />
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
      <Typography variant="body1" sx={{ textAlign: "left" }}>
        {props.instructions}
      </Typography>
    </Box>
  );
};
