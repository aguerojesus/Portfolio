import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';
import DownloadIcon from '@mui/icons-material/Download';

const pages = [
  { name: 'About Me', id: 'about' },
  { name: 'Projects', id: 'projects' },
  { name: 'Skills', id: 'skills' },
  { name: 'Experience', id: 'experience' },
  { name: 'Contact', id: 'contact' },
];

function ResponsiveAppBar() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const drawer = (
    <Box
      sx={{
        width: 260,
        height: '100%',
        backgroundColor: '#323332',
        color: '#FFD700',
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <Typography
        variant="h6"
        sx={{
          p: 2,
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.2rem',
        }}
      >
        MENU
      </Typography>

      <List>
        {pages.map((page) => (
          <ListItem key={page.name} disablePadding>
            <ListItemButton component="a" href={`#${page.id}`}>
              <ListItemText primary={page.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider sx={{ backgroundColor: '#555', my: 2 }} />

      {/* DOWNLOAD CV EN MOBILE */}
      <List>
        <ListItem disablePadding>
          <ListItemButton
            component="a"
            href="/YexinioAguero_CV.pdf"
            target="_blank"
          >
            <DownloadIcon sx={{ mr: 1 }} />
            <ListItemText primary="Download CV" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: '#323332',
          height: { xs: 56, md: 64 },
        }}
      >
        <Container maxWidth={false}>
          <Toolbar
            disableGutters
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                px: 2,
            }}
            >

            {/* LOGO */}
            {/*
            <Typography
              variant="h6"
              component="a"
              href="#homepage"
              sx={{
                ml: 2,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                flexGrow: { xs: 1, md: 0 },
              }}
            >
              HOME
            </Typography>
            */}
            {/* HAMBURGER (MOBILE) */}
            <IconButton
              onClick={toggleDrawer(true)}
              sx={{
                display: { xs: 'flex', md: 'none' },
                color: '#FFD700',
                mr: 1,
              }}
            >
              <MenuIcon />
            </IconButton>

            {/* LINKS DESKTOP */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page.name}
                  href={`#${page.id}`}
                  sx={{
                    color: '#FFD700',
                    fontSize: '1.05rem',
                    mx: 0.5,
                    '&:hover': {
                      color: '#f1b4b4',
                      backgroundColor: 'transparent',
                    },
                  }}
                >
                  {page.name}
                </Button>
              ))}
            </Box>

            {/* DOWNLOAD CV DESKTOP */}
            <Button
              href="/YexinioAguero_CV.pdf"
              target="_blank"
              startIcon={<DownloadIcon />}
              sx={{
                display: { xs: 'none', md: 'flex' },
                mr: 2,
                color: '#FFD700',
                border: '1px solid #FFD700',
                borderRadius: '20px',
                px: 2,
                '&:hover': {
                  backgroundColor: 'rgba(255,215,0,0.1)',
                },
              }}
            >
              Download CV
            </Button>

          </Toolbar>
        </Container>
      </AppBar>

      {/* DRAWER MOBILE */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{ display: { xs: 'block', md: 'none' } }}
      >
        {drawer}
      </Drawer>
    </>
  );
}

export default ResponsiveAppBar;
