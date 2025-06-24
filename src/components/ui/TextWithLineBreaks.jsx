import React from 'react';

/**
 * Component that takes a text string and renders it with line breaks after each full stop (period).
 * @param {Object} props - Component properties
 * @param {string} props.text - The text to process
 * @param {string} [props.className] - Optional CSS class names
 * @returns {JSX.Element} - Text with line breaks
 */
function TextWithLineBreaks({ text, className = '' }) {
  if (!text) return null;

  // Split text by periods and filter out empty strings
  const sentences = text
    .split('.')
    .filter((sentence) => sentence.trim() !== '');

  return (
    <div className={className}>
      {sentences.map((sentence, index) => (
        <div key={index} className='mb-4'>
          {sentence.trim()}.
        </div>
      ))}
    </div>
  );
}

export default TextWithLineBreaks;
