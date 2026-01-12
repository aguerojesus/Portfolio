import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import WorkIcon from "@mui/icons-material/Work";

const experiences = [
  {
    role: "Software Developer",
    company: "Freelance / Client Projects",
    period: "2024 – Present",
    description:
      "Software developer with over one year of experience developing full-stack applications for different clients. Responsible for designing, developing, and maintaining web and desktop software solutions, including property management systems, booking platforms, chatbot integrations, and business-oriented applications. Experienced in working with modern frontend frameworks, backend APIs, databases, microservices architectures, and third-party integrations. Actively involved in requirements analysis, system design, development, testing, and deployment.",
  },
  {
    role: "Sales Assistant",
    company: "CRG Toys",
    period: "April 2024 – December 2025",
    description:
      "Sales assistant responsible for customer interaction, product presentation, and service offering. Developed strong communication and interpersonal skills through direct client engagement, learning how to identify customer needs, explain product features clearly, and promote products and services effectively. This role strengthened teamwork, responsibility, and problem-solving abilities in a fast-paced commercial environment.",
  },
];

const ExperienceSection = () => {
  return (
    <Box
      id="experience"
      sx={{
        width: "100%",
        background: "linear-gradient(180deg, #0d0014 0%, #050008 100%)",
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
          Experience
        </Typography>

        <Stack spacing={5}>
          {experiences.map((exp, index) => (
            <Box key={index}>
              <Stack direction="row" spacing={2} alignItems="center">
                <WorkIcon sx={{ color: "#FFD700" }} />
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  {exp.role}
                </Typography>
              </Stack>

              <Typography
                sx={{
                  mt: 0.5,
                  color: "#FFD700",
                  fontSize: "0.95rem",
                }}
              >
                {exp.company} · {exp.period}
              </Typography>

              <Typography sx={{ mt: 2, opacity: 0.9, lineHeight: 1.7 }}>
                {exp.description}
              </Typography>

              {index !== experiences.length - 1 && (
                <Divider sx={{ mt: 4, borderColor: "rgba(255,255,255,0.1)" }} />
              )}
            </Box>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default ExperienceSection;
