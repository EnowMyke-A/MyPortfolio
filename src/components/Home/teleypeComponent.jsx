import React, { useState, useEffect } from 'react';

const Teletyping = () => {
  const strings = ['Enow Myke-Austine', 'a Software Engineer', 'a Fullstack MERN Developer'];
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [backspace, setBackspace] = useState(false);

  useEffect(() => {
    if (isTyping && !backspace) {
      const timer = setTimeout(() => {
        if (currentLetterIndex < strings[currentStringIndex].length) {
          setCurrentLetterIndex(currentLetterIndex + 1);
        } else {
          setIsTyping(false);
        }
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [currentLetterIndex, currentStringIndex, strings, isTyping, backspace]);

  useEffect(() => {
    if (!isTyping && !backspace) {
      const timer = setTimeout(() => {
        setBackspace(true);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [currentStringIndex, strings, isTyping, backspace]);

  useEffect(() => {
    if (backspace) {
      const timer = setTimeout(() => {
        if (currentLetterIndex > 0) {
          setCurrentLetterIndex(currentLetterIndex - 1);
        } else {
          setBackspace(false);
          setIsTyping(true);
          setCurrentStringIndex((currentStringIndex + 1) % strings.length);
        }
      }, 50);

      return () => clearTimeout(timer);
    }
  }, [currentLetterIndex, backspace]);

  useEffect(() => {
    setCurrentWord(strings[currentStringIndex].slice(0, currentLetterIndex));
  }, [currentStringIndex, currentLetterIndex, strings]);

  return (
    <span className='tele-typed'>{currentWord}</span>
  );
};

export default Teletyping;
