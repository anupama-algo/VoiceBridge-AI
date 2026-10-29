
import { useState } from 'react'
import './App.css'

const phrases = [
  { id: 1, category: 'Needs', text: 'I need help.' },
  { id: 2, category: 'Needs', text: 'I am thirsty.' },
  { id: 3, category: 'Needs', text: 'I am hungry.' },
  { id: 4, category: 'Feelings', text: 'I am happy.' },
  { id: 5, category: 'Feelings', text: 'I am tired.' },
  { id: 6, category: 'Feelings', text: 'I feel uncomfortable.' },
  { id: 7, category: 'Social', text: 'Hello!' },
  { id: 8, category: 'Social', text: 'Thank you.' },
  { id: 9, category: 'Social', text: 'Please give me a moment.' },
]

const categories = ['All', 'Needs', 'Feelings', 'Social']

function App() {
  const [message, setMessage] = useState('')
  const [category, setCategory] = useState('All')

  const visiblePhrases = phrases.filter(
    (phrase) => category === 'All' || phrase.category === category
  )

  function addPhrase(text) {
    setMessage((previous) =>
      previous ? `${previous} ${text}` : text
    )
  }

  function speakMessage() {
    if (!message.trim()) return

    if (!('speechSynthesis' in window)) {
      alert('Speech is not supported in this browser.')
      return
    }

    window.speechSynthesis.cancel()

    const utterance = new SpeechSynthesisUtterance(message)
    utterance.lang = 'en-US'
    utterance.rate = 0.9

    window.speechSynthesis.speak(utterance)
  }

  function clearMessage() {
    window.speechSynthesis?.cancel()
    setMessage('')
  }

  return (
    <main className="app-container">
      <div className="communication-board">
        <header className="board-header">
          <div className="brand-icon" aria-hidden="true">VB</div>

          <p className="eyebrow">
            ASSISTIVE COMMUNICATION PLATFORM
          </p>

          <h1>VoiceBridge <span>AI</span></h1>

          <p className="tagline">
            Helping every thought find its voice.
          </p>
        </header>

        <section aria-labelledby="composer-title">
          <h2 id="composer-title">Your Message</h2>

          <label htmlFor="message-input">
            Type a message or select phrases below.
          </label>

          <textarea
            id="message-input"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="Your message will appear here..."
            rows={4}
          />

          <div className="composer-actions">
            <button
              type="button"
              onClick={speakMessage}
              disabled={!message.trim()}
            >
              Speak Message
            </button>

            <button
              type="button"
              onClick={clearMessage}
              disabled={!message}
            >
              Clear Message
            </button>
          </div>
        </section>

        <section aria-labelledby="phrases-title">
          <h2 id="phrases-title">Quick Phrases</h2>

          <p>Choose a phrase to add it to your message.</p>

          <div
            className="category-filters"
            role="group"
            aria-label="Filter phrases by category"
          >
            {categories.map((item) => (
              <button
                key={item}
                type="button"
                aria-pressed={category === item}
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="phrase-grid">
            {visiblePhrases.map((phrase) => (
              <button
                key={phrase.id}
                type="button"
                className="phrase-card"
                onClick={() => addPhrase(phrase.text)}
              >
                <span>{phrase.text}</span>
                <small>{phrase.category}</small>
              </button>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}

export default App
