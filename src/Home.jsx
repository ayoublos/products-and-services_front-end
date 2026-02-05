import { useState } from 'react'
import './Home.css'

const safetySecuritySubcategories = [
  {
    id: 1,
    name: 'Antislip Tapes, Treads & Stair Nosings',
    icon: '🟡⚫'
  },
  {
    id: 2,
    name: 'Arc Flash Protection',
    icon: '⚡🟡'
  },
  {
    id: 3,
    name: 'Confined Space',
    icon: '🏗️'
  },
  {
    id: 4,
    name: 'Emergency Preparedness Products',
    icon: '🟠📦'
  },
  {
    id: 5,
    name: 'Eye & Face Protection',
    icon: '👓'
  },
  {
    id: 6,
    name: 'Eyewash Equipment & Safety Showers',
    icon: '🚿'
  },
  {
    id: 7,
    name: 'Fall Protection',
    icon: '🦺'
  },
  {
    id: 8,
    name: 'Fire Protection',
    icon: '🧯'
  },
  {
    id: 9,
    name: 'First Aid & Wound Care',
    icon: '🩹'
  },
  {
    id: 10,
    name: 'Floor Mats',
    icon: '⬛'
  },
  {
    id: 11,
    name: 'Footwear & Footwear Accessories',
    icon: '👢'
  },
  {
    id: 12,
    name: 'Gas Detection',
    icon: '📱'
  },
  {
    id: 13,
    name: 'Hand & Arm Protection',
    icon: '🧤'
  },
  {
    id: 14,
    name: 'Head Protection',
    icon: '🪖'
  }
]

const categories = [
  {
    id: 1,
    name: 'Safety & Security',
    icon: '🦺🔒'
  },
  {
    id: 2,
    name: 'Lighting & Electrical',
    icon: '💡⚡'
  },
  {
    id: 3,
    name: 'Tools & Test Instruments',
    icon: '🔧📊'
  },
  {
    id: 4,
    name: 'Cleaning & Janitorial',
    icon: '🧹🗑️'
  },
  {
    id: 5,
    name: 'HVAC',
    icon: '❄️🌡️'
  },
  {
    id: 6,
    name: 'Pipes, Hose, Tube & Fittings',
    icon: '🔩🔗'
  },
  {
    id: 7,
    name: 'Plumbing & Pumps',
    icon: '🚿💧'
  },
  {
    id: 8,
    name: 'Metalworking & Fabrication',
    icon: '⚙️🔨'
  },
  {
    id: 9,
    name: 'Motors & Power Transmission',
    icon: '⚡🔌'
  },
  {
    id: 10,
    name: 'Pneumatics & Hydraulics',
    icon: '🔧⚙️'
  },
  {
    id: 11,
    name: 'Material Handling',
    icon: '📦🚚'
  },
  {
    id: 12,
    name: 'Packaging & Shipping',
    icon: '📦📮'
  },
  {
    id: 13,
    name: 'Fasteners, Hardware & Raw Materials',
    icon: '🔩⚙️'
  },
  {
    id: 14,
    name: 'Building & Grounds Maintenance',
    icon: '🏗️🧱'
  },
  {
    id: 15,
    name: 'Tapes, Adhesives & Lubricants',
    icon: '📏🧴'
  },
  {
    id: 16,
    name: 'Fleet & Vehicle Maintenance',
    icon: '🚗🔧'
  },
  {
    id: 17,
    name: 'Lab, Office & Hospitality Supplies',
    icon: '🧪☕'
  }
]

function Home() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState(null)

  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleCategoryClick = (category) => {
    if (category.name === 'Safety & Security') {
      setSelectedCategory('safety-security')
    }
  }

  const handleBackClick = () => {
    setSelectedCategory(null)
    setSearchQuery('')
  }

  if (selectedCategory === 'safety-security') {
    const filteredSubcategories = safetySecuritySubcategories.filter((subcategory) =>
      subcategory.name.toLowerCase().includes(searchQuery.toLowerCase())
    )

    return (
      <div className="home-container">
        <div className="search-container">
          <div className="search-box">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Search subcategories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>
        </div>
        <div className="back-button-container">
          <button onClick={handleBackClick} className="back-button">
            ← Back to Categories
          </button>
        </div>
        <div className="category-title">Safety & Security</div>
        <div className="categories-grid subcategories">
          {filteredSubcategories.map((subcategory) => (
            <div key={subcategory.id} className="category-card">
              <div className="category-icon">{subcategory.icon}</div>
              <div className="category-name">{subcategory.name}</div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="home-container">
      <div className="search-container">
        <div className="search-box">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Search categories..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>
      </div>
      <div className="categories-grid">
        {filteredCategories.map((category) => (
          <div
            key={category.id}
            className="category-card"
            onClick={() => handleCategoryClick(category)}
          >
            <div className="category-icon">{category.icon}</div>
            <div className="category-name">{category.name}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home

