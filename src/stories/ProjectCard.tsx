import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {
  CardActionArea,
  CardActions,
  CardMedia,
  IconButton,
} from "@mui/material";
import { Delete } from "@mui/icons-material";

export interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  id: number;
  onDelete?: () => void;
  onCardClick?: () => void;
}

export default function ProjectCard(props: ProjectCardProps) {
  return (
    <Card sx={{ display: "flex" }}>
      <CardActionArea onClick={props.onCardClick}>
        <CardMedia component="img" sx={{ width: 151 }} image={props.image} />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5">
              {props.title}
            </Typography>
            <Typography
              variant="subtitle1"
              component="div"
              sx={{ color: "text.secondary" }}
            >
              {props.description}
            </Typography>
          </CardContent>
        </Box>
      </CardActionArea>
      <CardActions>
        <IconButton onClick={props.onDelete}>
          <Delete></Delete>
        </IconButton>
      </CardActions>
    </Card>
  );
}
