import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import ghibliComputer from '../assets/ghibli_computer_no_bkg.png';
import { useState, useEffect } from 'react';

const HeroSection = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 4rem 0;
  background: linear-gradient(180deg, rgb(167, 110, 35), rgb(21, 8, 21)); /* Cambia a un degradado lineal */
  animation: backgroundMove 1000s ease infinite;
  z-index: 1;
  background-size: 200% 200%;
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
  font-family: 'Fira Code', monospace;
  font-size: 4.2rem;
  font-weight: 500;
  font-style: italic;
  margin-bottom: 1.5rem;
  line-height: 1;
  color: #1a1a1a;
  letter-spacing: -0.02em;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: white;

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
  font-family: var(--font-subheading);
  font-size: 1.8rem;
  font-weight: 500;
  color: rgb(138, 72, 155);
  width: 500px;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const Introduction = styled.h2`
  font-family: var(--font-subheading);
  font-size: 2rem;
  color:rgb(194, 194, 194);
  margin-bottom: 1rem;
  margin-left: 0;
  margin-right: auto;
  text-align: left;
  align-self: flex-start;
  width: 100%;
`;


const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const words = ['product', 'software'];
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