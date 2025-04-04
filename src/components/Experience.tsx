import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const ExperienceSection = styled.section`
  padding: 6rem 0;
  background-color: #f8f8f8;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 3rem;
  text-align: center;
`;

const ExperienceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ExperienceCard = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Role = styled.h3`
  font-family: var(--font-mono);
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #1a1a1a;
  font-weight: 900;
  font-style: italic;
`;

const Company = styled.h4`
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  color: #444;
  line-height: 1.6;
`;

const experiences = [
  {
    role: "Software Engineer",
    company: "Fingo",
    description: "Led development of innovative solutions in a fast-paced environment."
  },
  {
    role: "Product Manager",
    company: "Andean Wide & Rillis",
    description: "Managed product development for payment solutions and compliance platforms."
  },
  {
    role: "Community Manager",
    company: "Acupuntura Constanza Greene",
    description: "Created and managed digital presence, including website design and social media strategy."
  },
  {
    role: "Teaching Assistant",
    company: "Pontificia Universidad Católica",
    description: "Assisted in advanced programming courses and engineering challenges."
  },
  {
    role: "Content Creator",
    company: "Personal Brand",
    description: "Creating engaging content across TikTok and Instagram platforms."
  },
  {
    role: "Founder",
    company: "Reclutas",
    description: "Developing an innovative party game application (In Progress)."
  }
];

const Experience = () => {
  return (
    <ExperienceSection id="experience">
      <SectionTitle
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Experience
      </SectionTitle>
      <ExperienceGrid>
        {experiences.map((exp, index) => (
          <ExperienceCard
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Role>{exp.role}</Role>
            <Company>{exp.company}</Company>
            <Description>{exp.description}</Description>
          </ExperienceCard>
        ))}
      </ExperienceGrid>
    </ExperienceSection>
  );
};

export default Experience; 