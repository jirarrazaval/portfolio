import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FaInstagram, FaTiktok } from 'react-icons/fa';

const ProjectsSection = styled.section`
  padding: 6rem 0;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 3rem;
  text-align: center;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
`;

const ProjectCard = styled(motion.div)`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 400px;
  background-color: #f0f0f0;
  position: relative;
  overflow: hidden;
`;

const TikTokEmbed = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #1a1a1a;
`;

const ProjectDescription = styled.p`
  color: #666;
  margin-bottom: 1rem;
  line-height: 1.6;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialLink = styled.a`
  color: #1a1a1a;
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #666;
  }
`;

const projects = [
  {
    title: "Reclutas",
    description: "An innovative party game application that brings fun to social gatherings. Currently in development with exciting features in the pipeline.",
    social: {
      instagram: "https://instagram.com/reclutas_",
      tiktok: "https://tiktok.com/@reclutas__"
    }
  },
  {
    title: "A Day in Tech - Santiago",
    description: "Watch my daily life as a tech professional in Santiago, Chile. Follow my journey through the tech industry and see what it's like to work in technology.",
    videoId: "7488147121259007237",
    social: {
      tiktok: "https://tiktok.com/@j__igreene/video/7488147121259007237"
    }
  },
  {
    title: "Tech Life in Santiago",
    description: "Another glimpse into my tech career in Santiago, showcasing the vibrant tech community and my role in it.",
    videoId: "7485533657361386807",
    social: {
      tiktok: "https://tiktok.com/@j__igreene/video/7485533657361386807"
    }
  },
  {
    title: "Acupuntura Website",
    description: "Designed and developed a professional website for Acupuntura Constanza Greene, including an ebook and social media management.",
    social: {
      instagram: "https://instagram.com/acupuntura_cgreene",
      website: "https://constanzagreene.cl"
    }
  }
];

const Projects = () => {
  return (
    <ProjectsSection id="projects">
      <SectionTitle
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </SectionTitle>
      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <ProjectImage>
              {project.videoId ? (
                <TikTokEmbed
                  src={`https://www.tiktok.com/embed/${project.videoId}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div style={{ 
                  width: '100%', 
                  height: '100%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  backgroundColor: '#f8f8f8'
                }}>
                  {project.title}
                </div>
              )}
            </ProjectImage>
            <ProjectContent>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <SocialLinks>
                {project.social.instagram && (
                  <SocialLink href={project.social.instagram} target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                  </SocialLink>
                )}
                {project.social.tiktok && (
                  <SocialLink href={project.social.tiktok} target="_blank" rel="noopener noreferrer">
                    <FaTiktok />
                  </SocialLink>
                )}
                {project.social.website && (
                  <SocialLink href={project.social.website} target="_blank" rel="noopener noreferrer">
                    🌐
                  </SocialLink>
                )}
              </SocialLinks>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsSection>
  );
};

export default Projects; 