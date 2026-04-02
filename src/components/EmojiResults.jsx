import React from 'react';
import EmojiCard from './EmojiCard';

const EmojiResults = ({ emojis }) => {
  return (
    <div className="emoji-results">
      {emojis.map((emoji) => (
        <EmojiCard key={emoji.codes} emoji={emoji} />
      ))}
    </div>
  );
};

export default EmojiResults;
