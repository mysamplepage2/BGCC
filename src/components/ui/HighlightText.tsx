import React from 'react';
import { cn } from '@/lib/utils';

interface HighlightTextProps {
  text: string;
  highlightWords?: string[];
  highlightClassName?: string;
  className?: string;
  as?: React.ElementType;
}

export const HighlightText: React.FC<HighlightTextProps> = ({
  text,
  highlightWords,
  highlightClassName = 'text-[#BF8440] font-semibold',
  className,
  as: Component = 'p',
}) => {
  if (!highlightWords || highlightWords.length === 0) {
    return <Component className={className}>{text}</Component>;
  }

  const words = text.split(' ');

  const isHighlight = (word: string) => {
    const cleanWord = word.replace(/[^\w\s-]/gi, '').toLowerCase();
    return highlightWords.some((phrase) => {
      const parts = phrase.toLowerCase().split(' ');
      return parts.includes(cleanWord);
    });
  };

  return (
    <Component className={className}>
      {words.map((word, index) => {
        const highlighted = isHighlight(word);
        return (
          <React.Fragment key={index}>
            {highlighted ? (
              <span className={highlightClassName}>{word}</span>
            ) : (
              word
            )}
            {index < words.length - 1 && ' '}
          </React.Fragment>
        );
      })}
    </Component>
  );
};
