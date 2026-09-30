import { useState } from 'react'
import './App.css'

function App() {
  const [showAddObject, setShowAddObject] = useState(false)

  if (showAddObject) {
    return (
      <div className="app">
        <header className="header">
          <h1>PlaceBack</h1>
          <p>Remember where you put your things.</p>
        </header>

        <main className="dashboard">
          <div className="dashboard-top">
            <h2>Add Object</h2>

            <button
              className="back-button"
              onClick={() => setShowAddObject(false)}
            >
              ← Back
            </button>
          </div>

          <div className="form-card">
            <label>
              Object Name
              <input
                type="text"
                placeholder="What are you putting away?"
              />
            </label>

            <label>
              Location
              <input
                type="text"
                placeholder="Where did you put it?"
              />
            </label>

            <label>
              Reason / Notes
              <textarea
                placeholder="Why did you put it there?"
                rows="4"
              ></textarea>
            </label>

            <label>
              Photo
              <input type="file" accept="image/*" />
            </label>

            <button className="save-button">
              Save Object
            </button>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="app">
      <header className="header">
        <h1>PlaceBack</h1>
        <p>Remember where you put your things.</p>
      </header>

      <main className="dashboard">
        <div className="dashboard-top">
          <h2>My Objects</h2>

          <button
            className="add-button"
            onClick={() => setShowAddObject(true)}
          >
            + Add Object
          </button>
        </div>

        <div className="search-container">
          <input
            type="text"
            placeholder="Search your objects..."
          />
        </div>

        <div className="objects-grid">
          <div className="object-card">
            <div className="object-image">
              📦
            </div>

            <div className="object-info">
              <h3>Nintendo Switch</h3>
              <p>📍 Bedroom closet</p>
              <p className="reason">
                Put here so I remember where I stored it.
              </p>
            </div>
          </div>

          <div className="object-card">
            <div className="object-image">
              🔑
            </div>

            <div className="object-info">
              <h3>Spare Keys</h3>
              <p>📍 Desk drawer</p>
              <p className="reason">
                Backup keys for the house.
              </p>
            </div>
          </div>

          <div className="object-card">
            <div className="object-image">
              🎮
            </div>

            <div className="object-info">
              <h3>PS5 Controller</h3>
              <p>📍 TV stand</p>
              <p className="reason">
                Kept here when I'm not using it.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App