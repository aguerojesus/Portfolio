import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";

// Icons
import {
  FaReact,
  FaJava,
  FaGitAlt,
  FaRobot,
  FaBrain,
  FaDatabase,
} from "react-icons/fa";

import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTypescript,
  SiFastapi,
  SiSpringboot,
  SiPostgresql,
  SiMongodb,
  SiSqlite,
  SiDocker,
  SiDotnet,
  SiElectron,
  SiGithub,
  SiPython,
  SiOpenai,
} from "react-icons/si";

const skills = {
  "Frontend": [
    { name: "HTML", icon: <SiHtml5 /> },
    { name: "CSS", icon: <SiCss3 /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "React", icon: <FaReact /> },
  ],

  Backend: [
    { name: "Python", icon: <SiPython /> },
    { name: "FastAPI", icon: <SiFastapi /> },
    { name: "Java", icon: <FaJava /> },
    { name: "Spring Boot", icon: <SiSpringboot /> },
    { name: ".NET (C#)", icon: <SiDotnet /> },
  ],

  Databases: [
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "SQLite", icon: <SiSqlite /> },
    { name: "SQL Server", icon: <FaDatabase /> },
  ],

  "AI & NLP": [
    { name: "Conversational AI", icon: <FaRobot /> },
    { name: "NLP (Wit.ai)", icon: <SiOpenai /> },
    { name: "AI Integration", icon: <FaBrain /> },
  ],

  Tools: [
    { name: "Git", icon: <FaGitAlt /> },
    { name: "GitHub", icon: <SiGithub /> },
    { name: "Docker", icon: <SiDocker /> },
    { name: "Electron", icon: <SiElectron /> },
  ],
};

const SkillsSection = () => {
  return (
    <Box
      id="skills"
      sx={{
        width: "100%",
        background: "linear-gradient(180deg, #1a001f 0%, #0d0014 100%)",
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
        <Typography variant="h4" sx={{ mb: 6, fontWeight: 700 }}>
          Skills
        </Typography>

        <Grid container spacing={6}>
          {Object.entries(skills).map(([category, items]) => (
            <Grid item xs={12} md={6} key={category}>
              <Typography
                variant="h6"
                sx={{
                  mb: 2,
                  color: "#FFD700",
                  fontWeight: 600,
                }}
              >
                {category}
              </Typography>

              <Stack
                direction="row"
                spacing={1.5}
                flexWrap="wrap"
                sx={{ maxWidth: "520px" }}
              >
                {items.map((skill) => (
                  <Chip
                    key={skill.name}
                    icon={skill.icon}
                    label={skill.name}
                    sx={{
                      mb: 1,
                      backgroundColor: "transparent",
                      color: "#fff",
                      border: "1px solid rgba(255,215,0,0.6)",
                      fontSize: "0.85rem",
                      "& .MuiChip-icon": {
                        color: "#FFD700",
                        fontSize: "1rem",
                      },
                      "&:hover": {
                        backgroundColor: "rgba(255,215,0,0.08)",
                      },
                    }}
                  />
                ))}
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default SkillsSection;

