import { Box, Button } from "@mui/material";
import { useCallback, useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user",
};
export function CameraView({ onCapture }: { onCapture: () => void }) {
  const webcamRef = useRef<Webcam>(null);
  const outerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const [camSize, setCamSize] = useState<{ width: number; height: number }>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (outerRef.current && buttonRef.current) {
      const outer = outerRef.current.getBoundingClientRect();
      const button = buttonRef.current.getBoundingClientRect();
      setCamSize({
        width: outer.width,
        height: (outer.height - button.height) * 0.7,
      });
    }
  }, []);
  const capture = useCallback(() => {
    // this function returns a photo if we want it
    webcamRef.current?.getScreenshot();
    onCapture();
  }, [webcamRef, onCapture]);
  return (
    <Box ref={outerRef} sx={{ height: "100vh" }}>
      <Box height="10%" />
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        videoConstraints={videoConstraints}
        width={camSize.width}
        height={camSize.height}
      />
      <Box
        ref={buttonRef}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button variant="contained" onClick={capture}>
          Capture photo
        </Button>
      </Box>
    </Box>
  );
}
