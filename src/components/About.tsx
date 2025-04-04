import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import javieraImage from '../assets/javiera5.jpg'; // Asegúrate de que la ruta sea correcta

const AboutSection = styled.section`
  padding: 4rem 2rem;
  background-color: rgb(37, 20, 49); /* Fondo oscuro */
  color: white; /* Color de texto blanco */
  margin-top: 90vh; /* Asegúrate de que empiece después del Hero */
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center; /* Alinear verticalmente */
  margin-bottom: 1rem; /* Espacio debajo del título */
`;

const Title = styled.h1`
  font-family: 'Fira Code', monospace; /* Estilo de fuente de código */
  font-size: 3rem; /* Tamaño grande */
  text-align: left;
`;

const Line = styled.div`
  flex-grow: 1; /* Permite que la línea ocupe el espacio restante */
  height: 0.3px; /* Grosor de la línea */
  background-color: white; /* Color de la línea */
  margin-left: 1rem; /* Espacio entre el título y la línea */
`;

const AboutContent = styled.p`
  font-size: 1.2rem; /* Tamaño de texto normal */
  line-height: 1.5; /* Espaciado entre líneas */
  text-align: left; /* Alinear texto a la izquierda */
`;

const AboutContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: flex; /* Cambiado a flex para alinear la imagen y el texto */
  align-items: flex-start;
  gap: 4rem; /* Espacio entre la imagen y el texto */
`;

const AboutText = styled.div`
  color: #666;
  line-height: 1.8;
  flex: 1; /* Permite que el texto ocupe el espacio disponible */
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap; /* Permite que las tarjetas se ajusten en fila */
  gap: 1rem; /* Espacio entre las tarjetas */
`;

const Skill = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1); /* Fondo semi-transparente */
  padding: 0.5rem 1rem; /* Tamaño más pequeño */
  border-radius: 8px;
  text-align: center;
  font-weight: 500;
  border: 1px solid rgb(167, 110, 35); /* Borde del color café */
  transition: background 0.3s;

  &:hover {
    background: rgba(167, 110, 35, 0.2); /* Fondo al pasar el mouse */
  }
`;

const Image = styled.img`
  width: 300px; /* Ajusta el tamaño de la imagen */
  height: 300px; /* Hacer la imagen cuadrada */
  border-radius: 12px;
  object-fit: cover; /* Mantiene la proporción de la imagen sin deformarla */
  margin-top: 2rem; /* Agrega margen superior para mover la imagen hacia abajo */
`;

const About = () => {
  return (
    <AboutSection>
      <AboutContainer>
        <AboutText>
          <TitleContainer>
            <Title>/about</Title>
            <Line /> {/* Línea horizontal */}
          </TitleContainer>
          <AboutContent>
          I'm a Product Manager and Software Engineer passionate about building tech that solves real problems. After leading the creation of product areas in two startups, I’ve found my sweet spot at the intersection of strategy, UX, and execution. I move fast, ask the right questions, and love collaborating with cross-functional teams to bring ideas to life.
          </AboutContent>
          <SkillsContainer>
            {["Typescript", "Python", "React.js", "Java", "Javascript ES6+", "C#"].map((skill, index) => (
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
        </AboutText>
        <Image src={javieraImage} alt="Javiera" />
      </AboutContainer>
    </AboutSection>
  );
};

export default About; 