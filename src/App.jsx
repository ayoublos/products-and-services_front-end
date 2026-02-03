import { useState } from 'react'
import './App.css'
import Home from './Home'

function App() {
  const [activeTab, setActiveTab] = useState('home')

  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <div className="company-name">
            <span className="logo-text">wendall</span>
          </div>
          <nav className="nav">
            <button
              className={`nav-tab ${activeTab === 'home' ? 'active' : ''}`}
              onClick={() => setActiveTab('home')}
            >
              Home
            </button>
            <button
              className={`nav-tab ${activeTab === 'products' ? 'active' : ''}`}
              onClick={() => setActiveTab('products')}
            >
              Products
            </button>
            <button
              className={`nav-tab ${activeTab === 'services' ? 'active' : ''}`}
              onClick={() => setActiveTab('services')}
            >
              Services
            </button>
            <button
              className={`nav-tab ${activeTab === 'contact' ? 'active' : ''}`}
              onClick={() => setActiveTab('contact')}
            >
              Contact
            </button>
          </nav>
        </div>
      </header>
      <main className="main-content">
        {activeTab === 'home' && <Home />}
        {activeTab === 'products' && <div>Products content coming soon...</div>}
        {activeTab === 'services' && <div>Services content coming soon...</div>}
        {activeTab === 'contact' && <div>Contact content coming soon...</div>}
      </main>
    </div>
  )
}

export default App

