import React from 'react';

function EmojiResults({ emojis }) {
  return (
    <div className="grid">
      {emojis.map((emoji, index) => (
        <div key={index} className="card">
          <div className="emoji">{emoji.char}</div>
          <div className="name">{emoji.name}</div>
        </div>
      ))}
    </div>
  );
}

export default EmojiResults;