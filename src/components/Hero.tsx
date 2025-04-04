import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import ghibliComputer from '../assets/ghibli_computer_no_bkg.png';
import { useState, useEffect } from 'react';

const HeroSection = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 95vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 4rem 0;
  background: linear-gradient(180deg, rgb(216, 205, 216)5%, hsl(300, 47.80%, 36.10%) 150%);
  animation: backgroundMove 1000s ease infinite;
  z-index: 1;
  background-size: 200% 200%;
  overflow: hidden;
`;

// linear-gradient(180deg, rgb(167, 110, 35), rgb(21, 8, 21));
// radial-gradient(circle at 150% 100%,rgb(212, 118, 210) 5%, #28112B 80%);
// linear-gradient(180deg, rgb(41, 16, 41)5%, hsl(300, 47.80%, 36.10%) 150%); 

const Content = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0rem;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 2rem;
  text-align: left;
  margin-left: 200px;
`;

const Image = styled.img`
  width: 700px;
  height: auto;
  border-radius: 12px;
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 0;
`;

const Title = styled(motion.h1)`
  color:rgb(107, 9, 131);
  font-family: 'Fira Code', monospace;
  font-size: 4.2rem;
  font-weight: 5900;
  font-style: italic;
  margin-bottom: 1.5rem;
  line-height: 1;
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
  overflow: hidden;
  white-space: nowrap;
  animation: blink 0.7s step-end infinite alternate;
  margin-right: 0.5rem;
  min-width: 8.2ch;
  height: 1em;

  @keyframes blink {
    0%, 100% {
      border-color: transparent;
    }
    50% {
      border-color: pink;
    }
  }
`;

const Subtitle = styled(motion.p)`
  font-family: var(--sigmar);
  font-weight: 300;
  font-size: 1.7rem;
  color: rgb(24, 1, 29);
  width: 600px;
`;

const Introduction = styled.h2`
  font-family: var(--sigmar);
  font-weight: 300;
  font-size: 1.7rem;
  color:rgb(33, 30, 30);
  margin-bottom: 1rem;
  margin-left: 0;
  margin-right: auto;
  text-align: left;
  align-self: flex-start;
  width: 100%;
`;

const ShadowCursor = styled.div<{ x: number; y: number }>`
  position: absolute;
  top: ${({ y }) => y}px;
  left: ${({ x }) => x}px;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background: radial-gradient(circle at center, rgba(128, 0, 128, 0.2) 0%, transparent 70%);
  pointer-events: none;
  transition: transform 0.1s ease;
`;

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const words = ['product', 'software'];
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

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

  const handleMouseMove = (e: React.MouseEvent) => {
    setCursorPosition({ x: e.clientX - 25, y: e.clientY - 25 });
  };

  return (
    <HeroSection onMouseMove={handleMouseMove}>
      <ShadowCursor x={cursorPosition.x} y={cursorPosition.y} />
      <Content>
        <div>
          <div>
            <Introduction>hi, I'm Javi. a</Introduction>
            <Image src={ghibliComputer} alt="Ghibli Computer" />
          </div>
          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <TypingText>{text}<span className="cursor">|</span></TypingText> engineer
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            who likes to craft digital experiences with code & creativity.
          </Subtitle>
        </div>
      </Content>
    </HeroSection>
  );
};

export default Hero; 