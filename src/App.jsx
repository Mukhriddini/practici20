import './App.css'

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Emoji Finder</h1>
        <p className="subtitle">Find emoji by keywords</p>
      </header>

      <div className="search-container">
        <input 
          type="text" 
          placeholder="Placeholder" 
          className="search-input"
        />
      </div>

      <main className="emoji-grid">
        <div className="card-wrapper">
          {/* Avatar overlay from Figma screenshot */}
          <div className="avatar-overlay">
            <div className="avatar-circle">A</div>
            <img src="https://placekitten.com/40/40" alt="cat" className="avatar-img" />
          </div>
          <div className="card">
            <span className="emoji">💯</span>
            <div className="title">100</div>
            <p className="desc">
              Hundred, points, symbol, wow, win, perfect, parties
            </p>
          </div>
        </div>

        <div className="card">
          <span className="emoji">🔢</span>
          <div className="title">1234</div>
          <p className="desc">
            input symbol for numbers symbol
          </p>
        </div>
      </main>
    </div>
  )
}

export default App
