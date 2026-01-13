import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Grid2 from "@mui/material/Grid2";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";

import projects from "../data/projects";

// Tech icons
import { FaReact, FaBootstrap, FaJava, FaDatabase, FaRobot } from "react-icons/fa";
import {
  SiTypescript,
  SiDocker,
  SiMui,
  SiFastapi,
  SiPostgresql,
  SiMongodb,
  SiSpringboot,
  SiElectron,
  SiSqlite,
  SiDotnet,
} from "react-icons/si";

// Images
import pvpsImage from "../assets/pvps_image.png";
import videotecaImage from "../assets/videoteca_image.png";
import chatbotImage from "../assets/chatbot_image.png";
import easyTravelImage from "../assets/easy_travel_image.png";
import makarisImage from "../assets/makaris_image.png";
import nutriappImage from "../assets/nutriapp_image.png";



const projectImages = {
  "pvps_image.png": pvpsImage,
  "videoteca_image.png": videotecaImage,
  "chatbot_image.png": chatbotImage,
  "easy_travel_image.png": easyTravelImage,
  "makaris_image.png": makarisImage,
  "nutriapp_image.png": nutriappImage
};

const techIcons = {
  "React": <FaReact />,
  "TypeScript": <SiTypescript />,
  "Wit.ai": <FaRobot />,
  MUI: <SiMui />,
  Bootstrap: <FaBootstrap />,
  "Python-Fastapi": <SiFastapi />,
  "SQL Server": <FaDatabase />,
  PostgreSQL: <SiPostgresql />,
  MongoDB: <SiMongodb />,
  Java: <FaJava />,
  "Spring Boot": <SiSpringboot />,
  Electron: <SiElectron />,
  SQLite: <SiSqlite />,
  "C# .NET MVC": <SiDotnet />,
  VPS: <SiDocker />,
};

const ProjectsSection = () => {
  return (
    <Box
      id="projects"
      sx={{
        width: "100%",
        py: { xs: 8, md: 12 },
      }}
    >
      <Box
        sx={{
          maxWidth: "1200px",
          mx: "auto",
          px: { xs: 2, md: 4 },
          color: "#fff",
        }}
      >
        <Typography variant="h4" sx={{ mb: 5, fontWeight: 700 }}>
          Projects
        </Typography>

        <Stack spacing={5}>
          {projects.map((project, index) => (
            <Card
              key={index}
              sx={{
                backgroundColor: "#2c2c2c",
                borderRadius: 3,
                overflow: "hidden",
              }}
            >
              <Grid2 container>
                {/* IMAGEN */}
                <Grid2
                  size={{ xs: 12, md: 5 }}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#1f1f1f",
                  }}
                >
                  <Box
                    component="img"
                    src={projectImages[project.image]}
                    alt={project.title}
                    sx={{
                      width: "100%",
                      maxHeight: { xs: 220, md: 280 },
                      objectFit: "contain",
                      p: 2,
                    }}
                  />
                </Grid2>

                {/* CONTENIDO */}
                <Grid2 size={{ xs: 12, md: 7 }}>
                  <CardContent sx= {{color: "#fff",}} >
                    <Typography variant="h5" sx={{ fontWeight: 600 }}>
                      {project.title}
                    </Typography>

                    <Typography sx={{
                        mt: 2,
                        opacity: 0.9,
                        maxWidth: "700px",
                    }}>
                      {project.description}
                    </Typography>

                    {/* ICONOS */}
                    <Stack
                      direction="row"
                      spacing={2}
                      sx={{
                        mt: 3,
                        flexWrap: "wrap",
                        fontSize: "1.6rem",
                        color: "#FFD700",
                      }}
                    >
                      {project.tech.map((tech, i) => (
                        <Box key={i} title={tech}>
                          {techIcons[tech]}
                        </Box>
                      ))}
                    </Stack>
                  </CardContent>

                  <CardActions sx={{ px: 2, pb: 2}}>
                    {project.githubUrl && (
                      <Button
                        href={project.githubUrl}
                        target="_blank"
                        startIcon={<GitHubIcon />}
                        sx={{
                          color: "#FFD700",
                          border: "1px solid #FFD700",
                          borderRadius: "20px",
                          mr: 2,
                        }}
                      >
                        GitHub
                      </Button>
                    )}

                    {project.siteUrl && (
                      <Button
                        href={project.siteUrl}
                        target="_blank"
                        startIcon={<LaunchIcon />}
                        sx={{
                          color: "#FFD700",
                          border: "1px solid #FFD700",
                          borderRadius: "20px",
                        }}
                      >
                        Live Site
                      </Button>
                    )}
                  </CardActions>
                </Grid2>
              </Grid2>
            </Card>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default ProjectsSection;

