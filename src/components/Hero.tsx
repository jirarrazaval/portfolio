import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import ghibliComputer from '../assets/ghibli_computer_no_bkg.png';
import { useState, useEffect } from 'react';

const HeroSection = styled.section`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 4rem 0;
`;

const Content = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0rem;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 2rem;
  text-align: left;
`;

const Image = styled.img`
  width: 600px;
  height: auto;
  border-radius: 12px;
`;

const Title = styled(motion.h1)`
  font-family: var(--font-mono);
  font-size: 6rem;
  font-weight: 900;
  font-style: italic;
  margin-bottom: 1.5rem;
  line-height: 1.1;
  color: #1a1a1a;
  letter-spacing: -0.02em;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 768px) {
    font-size: 3.5rem;
  }
`;

const TypingText = styled.span`
  display: inline-block;
  width: 8ch; /* Reservar espacio para la palabra más larga */
  overflow: hidden;
  white-space: nowrap;
  border-right: 2px solid #1a1a1a;
  animation: blink 0.7s step-end infinite alternate;
  margin-right: 1rem; /* Separar de 'Engineer' */
  visibility: visible; /* Mantener el espacio reservado */
  min-width: 8ch; /* Asegurar que el espacio se mantenga */
  height: 1em; /* Fijar la altura para evitar movimiento */

  @keyframes blink {
    from {
      border-color: transparent;
    }
    to {
      border-color: #1a1a1a;
    }
  }
`;

const Subtitle = styled(motion.p)`
  font-family: var(--font-subheading);
  font-size: 1.8rem;
  color: #666;
  margin-bottom: 2rem;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const Description = styled(motion.p)`
  font-family: var(--font-light);
  font-size: 1.2rem;
  color: #444;
  line-height: 1.8;
  margin-top: 1rem;
  margin-bottom: 2rem;
  font-weight: 200;
  max-width: 600px;
  margin-left: 0;
  margin-right: auto;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Introduction = styled.h2`
  font-family: var(--font-subheading);
  font-size: 2rem;
  color: #1a1a1a;
  margin-bottom: 1rem;
`;

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const words = ['Product', 'Software'];
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleType = () => {
      const currentWord = words[loopNum % words.length];
      setText(
        isDeleting
          ? currentWord.substring(0, text.length - 1)
          : currentWord.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting]);

  return (
    <HeroSection>
      <Content>
        <div>
          <Introduction>Hi, I'm Javi</Introduction>
          <Image src={ghibliComputer} alt="Ghibli Computer" />
        </div>
        <div>
          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <TypingText>{text}</TypingText>
          </Title>
          <Title>Engineer</Title>
          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Crafting Digital Experiences with Code & Creativity
          </Subtitle>
          {/* <Description
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Passionate about building innovative solutions that combine technical excellence
            with user-centered design. From software development to product management,
            I bring ideas to life with a creative and analytical approach.
          </Description> */}
        </div>
      </Content>
    </HeroSection>
  );
};

export default Hero; 