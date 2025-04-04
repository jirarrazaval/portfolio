import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const AboutSection = styled.section`
  padding: 6rem 0;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 3rem;
  text-align: center;
`;

const AboutContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const AboutText = styled.div`
  color: #666;
  line-height: 1.8;
`;

const AboutParagraph = styled(motion.p)`
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
`;

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;

const Skill = styled(motion.div)`
  background: #f8f8f8;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  font-weight: 500;
`;

const skills = [
  "Software Development",
  "Product Management",
  "UI/UX Design",
  "Content Creation",
  "Community Management",
  "Teaching",
  "Project Leadership",
  "Social Media Strategy"
];

const About = () => {
  return (
    <AboutSection id="about">
      <SectionTitle
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </SectionTitle>
      <AboutContainer>
        <AboutText>
          <AboutParagraph
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            I'm a versatile professional with a unique blend of technical expertise and creative vision. 
            As a Software Engineer and Product Manager, I bridge the gap between technical implementation 
            and user experience, creating solutions that are both powerful and intuitive.
          </AboutParagraph>
          <AboutParagraph
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            My journey in tech has been diverse, from developing innovative solutions at Fingo to 
            managing product development at Andean Wide and Rillis. I've also explored my creative side 
            through content creation and community management, bringing a unique perspective to every project.
          </AboutParagraph>
          <AboutParagraph
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Currently, I'm focused on building Reclutas, an innovative party game application, while 
            sharing my knowledge and experiences through social media content creation. I believe in the 
            power of combining technical skills with creative thinking to build meaningful digital experiences.
          </AboutParagraph>
        </AboutText>
        <SkillsContainer>
          {skills.map((skill, index) => (
            <Skill
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {skill}
            </Skill>
          ))}
        </SkillsContainer>
      </AboutContainer>
    </AboutSection>
  );
};

export default About; 