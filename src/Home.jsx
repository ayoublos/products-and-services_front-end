import './Home.css'

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
  return (
    <div className="home-container">
      <div className="categories-grid">
        {categories.map((category) => (
          <div key={category.id} className="category-card">
            <div className="category-icon">{category.icon}</div>
            <div className="category-name">{category.name}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home

