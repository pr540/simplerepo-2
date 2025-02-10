import { useState, useEffect } from 'react';

const AnimatedText = () => {
  const commonWord = "Our";
  const sentences = [
    " Pharmacy is Trusted",
    " Services for You",
    " Products Include Health Items"
  ];

  const [displayedText, setDisplayedText] = useState("");
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isAdding, setIsAdding] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const addSpeed = 150; // Speed of typing
    const deleteSpeed = 50; // Speed of deleting
    const pauseDuration = 2000; // Pause duration after the sentence is fully typed

    const timeout = setTimeout(() => {
      const currentSentence = sentences[sentenceIndex];

      if (isAdding) {
        if (charIndex < currentSentence.length) {
          setDisplayedText((prev) => prev + currentSentence[charIndex]);
          setCharIndex((prev) => prev + 1);
        } else {
          setIsAdding(false);
          setIsPaused(true);
          setTimeout(() => setIsPaused(false), pauseDuration);
        }
      } else {
        if (charIndex > 0) {
          setDisplayedText((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
        } else {
          setIsAdding(true);
          setSentenceIndex((prev) => (prev + 1) % sentences.length);
        }
      }
    }, isPaused ? pauseDuration : (isAdding ? addSpeed : deleteSpeed));

    return () => clearTimeout(timeout);
  }, [charIndex, isAdding, isPaused, sentenceIndex, sentences]);

  return (
    <h2 className="text-[28px] flex gap-2 font-semibold  bg-clip-text ">
        <div className=' text-green-500'>
        {commonWord}

        </div>
        <div className='text-blue-900'>
        {displayedText}

        </div>
    </h2>
  );
};

export default AnimatedText;
