import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";

// Icons
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const ContactSection = () => {
  return (
    <Box
      id="contact"
      sx={{
        width: "100%",
        background: "linear-gradient(180deg, #050008 0%, #000000 100%)",
        py: { xs: 8, md: 12 },
      }}
    >
      <Box
        sx={{
          maxWidth: "900px",
          mx: "auto",
          px: { xs: 2, md: 4 },
          color: "#fff",
          textAlign: "center",
        }}
      >
        <Typography variant="h4" sx={{ mb: 2, fontWeight: 700 }}>
          Contact
        </Typography>

        <Typography sx={{ mb: 5, opacity: 0.85 }}>
          Feel free to reach out for collaborations, projects, or opportunities.
        </Typography>

        <Stack spacing={3} alignItems="center">
          {/* EMAIL */}
          <Stack direction="row" spacing={2} alignItems="center">
            <EmailIcon sx={{ color: "#FFD700" }} />
            <Link
              href="mailto:tuemail@email.com"
              underline="none"
              sx={{ color: "#fff", fontSize: "1rem" }}
            >
              aguerohidalgojesus@gmail.com
            </Link>
          </Stack>

          {/* PHONE */}
          <Stack direction="row" spacing={2} alignItems="center">
            <PhoneIcon sx={{ color: "#FFD700" }} />
            <Typography sx={{ fontSize: "1rem" }}>
              +506 8553 1180
            </Typography>
          </Stack>

          <Divider
            sx={{
              width: "60%",
              my: 3,
              borderColor: "rgba(255,255,255,0.1)",
            }}
          />

          {/* SOCIAL LINKS */}
          <Stack direction="row" spacing={4}>
            <Link
              href="https://www.linkedin.com/in/jesus-aguero/"
              target="_blank"
              sx={{ color: "#FFD700" }}
            >
              <LinkedInIcon fontSize="large" />
            </Link>

            <Link
              href="https://github.com/aguerojesus"
              target="_blank"
              sx={{ color: "#FFD700" }}
            >
              <GitHubIcon fontSize="large" />
            </Link>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default ContactSection;
