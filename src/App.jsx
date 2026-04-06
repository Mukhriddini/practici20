import { useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar'

function App() {
  const [searchTerm, setSearchTerm] = useState('')

  const emojis = [
    {
      id: 1,
      emoji: "💯",
      title: "100",
      tags: ["Hundred", "points", "symbol", "wow", "win", "perfect", "parties"]
    },
    {
      id: 2,
      emoji: "🔢",
      title: "1234",
      description: "input symbol for numbers symbol"
    }
  ]

  const filteredEmojis = emojis.filter(emoji =>
    emoji.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (emoji.tags && emoji.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))) ||
    (emoji.description && emoji.description.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  return (
    <div className="app">
      <div className="header">
        <h1>Emoji Finder</h1>
        <p className="subtitle">Find emoji by keywords</p>
      </div>

      <SearchBar value={searchTerm} onChange={setSearchTerm} />

      <div className="emoji-list">
        {filteredEmojis.map(emoji => (
          <div key={emoji.id} className="emoji-item">
            <span className="emoji-symbol">{emoji.emoji}</span>
            <div className="emoji-info">
              <div className="emoji-title">{emoji.title}</div>
              {emoji.tags ? (
                <div className="emoji-tags">{emoji.tags.join(', ')}</div>
              ) : (
                <div className="emoji-description">{emoji.description}</div>
              )}
            </div>
          </div>
        ))}
      </div>

      {filteredEmojis.length === 0 && (
        <div className="no-results">No emoji found</div>
      )}
    </div>
  )
}

export default App
