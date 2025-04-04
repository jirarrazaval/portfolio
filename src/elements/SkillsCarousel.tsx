import styled from '@emotion/styled';
import { useEffect } from 'react';

const CarouselContainer = styled.div`
  overflow: hidden; /* Oculta el contenido que se sale del contenedor */
  position: relative;
  height: 50px; /* Ajusta la altura según sea necesario */
`;

const SkillsWrapper = styled.div`
  display: flex;
  white-space: nowrap; /* Asegura que los elementos estén en una sola línea */
  animation: scroll 10s linear infinite; /* Animación continua */
`;

const Skill = styled.div`
  background: rgba(255, 255, 255, 0.1); /* Fondo semi-transparente */
  padding: 0.5rem 1rem; /* Tamaño más pequeño */
  border-radius: 8px;
  text-align: center;
  font-weight: 500;
  border: 1px solid rgb(167, 110, 35); /* Borde del color café */
  margin-right: 1rem; /* Espacio entre habilidades */
`;

const FadeEffect = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  background: linear-gradient(
    90deg,
    rgb(40, 27, 49) 0%,
    transparent 15%,
    transparent 85%,
    rgb(40, 27, 49) 100%
  );
  pointer-events: none; /* Permite que los clics pasen a través de este elemento */
`;

const SkillsCarousel = () => {
  const skills = ["Typescript", "Python", "React.js", "SQL", "Figma", "Cursor", "Git", "AWS", "UX", "Slack", "Notion", "API Rest", "Django"];

  return (
    <CarouselContainer>
      <SkillsWrapper>
        {skills.map((skill, index) => (
          <Skill key={index}>{skill}</Skill>
        ))}
        {/* Repetir las habilidades para el efecto continuo */}
        {skills.map((skill, index) => (
          <Skill key={index + skills.length}>{skill}</Skill>
        ))}
      </SkillsWrapper>
      <FadeEffect /> {/* Efecto de degradado */}
    </CarouselContainer>
  );
};

export default SkillsCarousel;