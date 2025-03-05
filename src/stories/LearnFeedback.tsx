import { Box, Button, TextField, Typography } from "@mui/material";
import { useRef, useState } from "react";

enum successState {
  SUCCESS,
  NOINPUT,
}

interface LearnFeedbackProps {
  visible: boolean;
}

export const LearnFeedback = (props: LearnFeedbackProps) => {
  const [success, setSuccess] = useState<successState>(successState.NOINPUT);
  const textValue = useRef("");

  function handleSubmit() {
    if (textValue.current != "") {
      setSuccess(successState.SUCCESS);
      return;
    }
  }

  return (
    <Box
      sx={{ flexDirection: "column", display: props.visible ? "flex" : "none" }}
    >
      <Typography
        variant="h3"
        sx={{
          alignSelf: "center",
          visibility: `${success != successState.NOINPUT ? "hidden" : "visible"}`,
        }}
      >
        Feedback
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          visibility: `${success != successState.NOINPUT ? "hidden" : "visible"}`,
        }}
      >
        <TextField
          variant="outlined"
          multiline
          minRows={5}
          maxRows={5}
          placeholder="What can we improve on?"
          onChange={(e) => {
            textValue.current = e.target.value;
          }}
        />
        <Button
          variant="outlined"
          sx={{ position: "absolute", alignSelf: "flex-end", mt: "20%", mr: 1 }}
          onClick={handleSubmit}
        >
          <Typography>Submit</Typography>
        </Button>
      </Box>
      <Typography
        sx={{
          visibility: `${success != successState.SUCCESS ? "hidden" : "visible"}`,
        }}
        variant="h3"
        textAlign="center"
      >
        Thank you! Your feedback is greatly appreciated!
      </Typography>
    </Box>
  );
};
