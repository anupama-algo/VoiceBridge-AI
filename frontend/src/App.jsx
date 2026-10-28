import './App.css'

function App() {
  return (
    <main className="app-container">
      <div className="welcome-card">
        <div className="brand-icon" aria-hidden="true">VB</div>

        <p className="eyebrow">ASSISTIVE COMMUNICATION PLATFORM</p>

        <h1>VoiceBridge <span>AI</span></h1>

        <p className="tagline">
          Helping every thought find its voice.
        </p>

        <p className="description">
          An accessible communication experience designed to help people
          express themselves through words, phrases, and speech.
        </p>

        <div className="status">
          <span className="status-dot" aria-hidden="true"></span>
          Development in progress
        </div>
      </div>
    </main>
  )
}

export default App