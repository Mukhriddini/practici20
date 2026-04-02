import React from 'react';

const EmojiCard = ({ emoji }) => {
  return (
    <div className="emoji-card">
      <p className="emoji">{emoji.char}</p>
      <p className="emoji-name">{emoji.name}</p>
      <p className="emoji-keywords">{emoji.keywords}</p>
    </div>
  );
};

export default EmojiCard;
