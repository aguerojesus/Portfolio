import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import profileImage from "../assets/profile_img.jpeg";

const AboutSection = () => {
  return (
    <Box
      id="about"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        py: { xs: 10, md: 14 },
      }}
    >
      <Box
        sx={{
          maxWidth: "1200px",
          mx: "auto",
          px: { xs: 2, md: 4 },
        }}
      >
        <Grid
          container
          spacing={6}
          alignItems="center"
          direction={{ xs: "column", md: "row" }}
        >
          {/* IMAGEN */}
          <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
            <Avatar
              src={profileImage}
              alt="Yexinio Jesús Agüero Hidalgo"
              sx={{
                width: { xs: 180, md: 260 },
                height: { xs: 180, md: 260 },
                mx: "auto",
                border: "3px solid #FFD700",
              }}
            />
          </Grid>

          {/* TEXTO */}
          <Grid item xs={12} md={8}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                color: "#ffffff",
                mb: 2,
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Hi! I’m{" "}
              <Box component="span" sx={{ color: "#FFD700" }}>
                Yexinio Jesús Agüero Hidalgo
              </Box>
            </Typography>

            <Typography
              sx={{
                fontSize: "1.05rem",
                lineHeight: 1.8,
                opacity: 0.9,
                maxWidth: "650px",
                textAlign: { xs: "center", md: "left" },
              }}
            >
              A web developer passionate about creating efficient and visually
              appealing solutions, both in frontend and backend. With experience
              in full-stack application development, I enjoy building intuitive
              user interfaces and robust backend architectures.
            </Typography>

            {/* WELCOME */}
            <Typography
              sx={{
                mt: 6,
                fontSize: { xs: "1.4rem", md: "1.8rem" },
                fontWeight: 700,
                letterSpacing: "0.15rem",
                color: "#FFD700",
                textAlign: { xs: "center", md: "left" },
              }}
            >
              WELCOME TO MY PORTFOLIO
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default AboutSection;

