import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import javieraImage from '../assets/javiera5.jpg'; // Asegúrate de que la ruta sea correcta
import SkillsCarousel from '../elements/SkillsCarousel'; // Importa el nuevo componente

const AboutSection = styled.section`
  padding: 4rem 2rem;
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
  max-width: 500px; /* Ajusta el ancho máximo del texto */
`;

const Image = styled.img`
  width: 300px; /* Ajusta el tamaño de la imagen */
  height: 300px; /* Hacer la imagen cuadrada */
  border-radius: 12px;
  object-fit: cover; /* Mantiene la proporción de la imagen sin deformarla */
  margin-top: 2rem; /* Agrega margen superior para mover la imagen hacia abajo */
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: nowrap; /* Mantener en una sola fila */
  gap: 1rem; /* Espacio entre las tarjetas */
  margin-top: 2rem; /* Agrega margen superior */
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
            I'm a Product Manager and Software Engineer passionate about building tech that solves real problems. After leading the creation of product areas in two startups, I've found my sweet spot at the intersection of strategy, UX, and execution. I move fast, ask the right questions, and love collaborating with cross-functional teams to bring ideas to life.
          </AboutContent>
          <SkillsContainer>
            <SkillsCarousel /> {/* Agrega el carrusel de habilidades */}
          </SkillsContainer>
        </AboutText>
        <Image src={javieraImage} alt="Javiera" />
      </AboutContainer>
    </AboutSection>
  );
};

export default About; 