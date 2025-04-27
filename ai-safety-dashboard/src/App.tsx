import { useState } from 'react'
import './App.css'
import { Incident, Severity } from './types'
import { mockIncidents } from './mockData'

function App() {
  const [incidents, setIncidents] = useState<Incident[]>(mockIncidents)
  const [showForm, setShowForm] = useState(false)
  const [severityFilter, setSeverityFilter] = useState<Severity | 'all'>('all')
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const newIncident: Incident = {
      id: Date.now().toString(),
      title: formData.get('title') as string,
      description: formData.get('description') as string,
      severity: formData.get('severity') as Severity,
      reportedDate: new Date().toISOString(),
    }
    setIncidents([newIncident, ...incidents])
    setShowForm(false)
    e.currentTarget.reset()
  }

  const filteredIncidents = incidents.filter(
    (incident) => severityFilter === 'all' || incident.severity === severityFilter
  )

  const sortedIncidents = [...filteredIncidents].sort((a, b) => {
    const dateA = new Date(a.reportedDate).getTime()
    const dateB = new Date(b.reportedDate).getTime()
    return sortOrder === 'asc' ? dateA - dateB : dateB - dateA
  })

  return (
    <div className="container">
      <div className="header">
        <img src="/logo.svg" alt="AI Safety Dashboard Logo" className="logo" />
        <h1>AI Safety Incident Dashboard</h1>
      </div>
      
      <div className="controls">
        <div className="filter-controls">
          <label htmlFor="severity-filter">Filter by Severity:</label>
          <select
            id="severity-filter"
            value={severityFilter}
            onChange={(e) => setSeverityFilter(e.target.value as Severity | 'all')}
          >
            <option value="all">All</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>

        <div className="sort-controls">
          <label htmlFor="sort-order">Sort by Date:</label>
          <select
            id="sort-order"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value as 'asc' | 'desc')}
          >
            <option value="desc">Newest First</option>
            <option value="asc">Oldest First</option>
          </select>
        </div>
      </div>

      <button className="new-incident-btn" onClick={() => setShowForm(!showForm)}>
        {showForm ? 'Cancel' : 'Report New Incident'}
      </button>

      {showForm && (
        <form className="incident-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">Title:</label>
            <input type="text" id="title" name="title" required />
          </div>
          <div>
            <label htmlFor="description">Description:</label>
            <textarea id="description" name="description" required />
          </div>
          <div>
            <label htmlFor="severity">Severity:</label>
            <select id="severity" name="severity" required>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
          <button type="submit">Submit Incident</button>
        </form>
      )}

      <div className="incidents-list">
        {sortedIncidents.map((incident) => (
          <div key={incident.id} className="incident-card">
            <div className="incident-header">
              <h3>{incident.title}</h3>
              <span className={`severity-badge ${incident.severity}`}>
                {incident.severity}
              </span>
            </div>
            <p className="date">
              Reported: {new Date(incident.reportedDate).toLocaleDateString()}
            </p>
            <p className="incident-description">{incident.description}</p>
            <button className="view-details-btn">View Details</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
