import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

const CarouselContainer = styled.div`
  overflow: hidden; /* Oculta el contenido que se sale del contenedor */
  position: relative;
  height: 50px; /* Ajusta la altura según sea necesario */
`;

const SkillsWrapper = styled.div`
  display: flex;
  white-space: nowrap; /* Asegura que los elementos estén en una sola línea */
  transition: transform 0.5s ease; /* Transición suave para el movimiento */
  position: relative;
  z-index: 1;
  animation: scroll 8s linear infinite;

  @keyframes scroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
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

const SkillsCarousel = () => {
  const skills = ["Typescript", "Python", "React.js", "SQL", "Slack", "Notion", "Figma","Git", "AWS", "UX"];
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prevOffset) => (prevOffset + 1) % skills.length);
    }, 2000); // Cambia cada 2 segundos

    return () => clearInterval(interval);
  }, [skills.length]);

  return (
    <CarouselContainer>
      <SkillsWrapper
        style={{ transform: `translateX(-${offset * (100 / skills.length)}%)` }} // Mueve el carrusel
      >
        {skills.map((skill, index) => (
          <Skill key={index}>{skill}</Skill>
        ))}
        {/* Repetir las habilidades para el efecto continuo */}
        {skills.map((skill, index) => (
          <Skill key={index + skills.length}>{skill}</Skill>
        ))}
      </SkillsWrapper>
    </CarouselContainer>
  );
};

export default SkillsCarousel;