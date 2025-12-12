"use client";

import { useState, useEffect, useRef } from "react";

/**
 * Custom hook for typewriter effect
 * Cycles through an array of strings with typing and deleting animation
 */
export function useTypewriter(
  words: string[],
  typingSpeed: number = 100,
  deletingSpeed: number = 50,
  delayBetweenWords: number = 2000
) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (words.length === 0) return;

    const currentWord = words[currentWordIndex];
    const speed = isDeleting ? deletingSpeed : typingSpeed;

    if (!isPaused) {
      timeoutRef.current = setTimeout(() => {
        if (!isDeleting && currentText === currentWord) {
          // Finished typing, wait then start deleting
          setIsPaused(true);
          setTimeout(() => {
            setIsPaused(false);
            setIsDeleting(true);
          }, delayBetweenWords);
        } else if (isDeleting && currentText === "") {
          // Finished deleting, move to next word
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        } else if (isDeleting) {
          // Deleting
          setCurrentText((prev) => prev.slice(0, -1));
        } else {
          // Typing
          setCurrentText((prev) => currentWord.slice(0, prev.length + 1));
        }
      }, speed);

      return () => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      };
    }
  }, [
    currentText,
    isDeleting,
    isPaused,
    currentWordIndex,
    words,
    typingSpeed,
    deletingSpeed,
    delayBetweenWords,
  ]);

  return currentText;
}
