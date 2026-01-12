import Divider from '@mui/material/Divider';  
import AboutSection from '../sections/AboutSection';
import ResponsiveAppBar from '../components/responsiveAppBar';
import ProjectsSection from '../sections/ProjectsSection';
import SkillsSection from '../sections/SkillsSection';
import ExperienceSection from '../sections/ExperienceSection';
import ContactSection from '../sections/ContactSection';

function HomePage () {
  return (
    <div className="App">
        <ResponsiveAppBar></ResponsiveAppBar>
            
        <AboutSection></AboutSection>

        <Divider className='divider' />

        <ProjectsSection></ProjectsSection>

        <Divider className='divider' />

        <SkillsSection></SkillsSection>

        <Divider className='divider' />
        
        <ExperienceSection></ExperienceSection>

        <Divider className='divider' />

        <ContactSection></ContactSection>

    </div>
  
)};

export default HomePage;
