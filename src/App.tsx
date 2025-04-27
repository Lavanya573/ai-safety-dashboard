import { useState } from 'react';
import { Incident, Severity, SortOrder } from './types';
import { mockIncidents } from './mockData';
import './App.css';

function App() {
  const [incidents, setIncidents] = useState<Incident[]>(mockIncidents);
  const [filter, setFilter] = useState<Severity | 'All'>('All');
  const [sortOrder, setSortOrder] = useState<SortOrder>('newest');
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [newIncident, setNewIncident] = useState({
    title: '',
    description: '',
    severity: 'Medium' as Severity
  });

  const filteredIncidents = incidents
    .filter(incident => filter === 'All' || incident.severity === filter)
    .sort((a, b) => {
      const dateA = new Date(a.reported_at);
      const dateB = new Date(b.reported_at);
      return sortOrder === 'newest' ? dateB.getTime() - dateA.getTime() : dateA.getTime() - dateB.getTime();
    });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newIncident.title || !newIncident.description) return;

    const incident: Incident = {
      id: incidents.length + 1,
      ...newIncident,
      reported_at: new Date().toISOString()
    };

    setIncidents([...incidents, incident]);
    setNewIncident({ title: '', description: '', severity: 'Medium' });
    setShowForm(false);
  };

  return (
    <div className="container">
      <h1>AI Safety Incident Dashboard</h1>
      
      <div className="controls">
        <div className="filter-controls">
          <label>Filter by Severity:</label>
          <select value={filter} onChange={(e) => setFilter(e.target.value as Severity | 'All')}>
            <option value="All">All</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>

        <div className="sort-controls">
          <label>Sort by Date:</label>
          <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value as SortOrder)}>
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
          </select>
        </div>
      </div>

      <button className="new-incident-btn" onClick={() => setShowForm(!showForm)}>
        {showForm ? 'Cancel' : 'Report New Incident'}
      </button>

      {showForm && (
        <form onSubmit={handleSubmit} className="incident-form">
          <div>
            <label>Title:</label>
            <input
              type="text"
              value={newIncident.title}
              onChange={(e) => setNewIncident({ ...newIncident, title: e.target.value })}
              required
            />
          </div>
          <div>
            <label>Description:</label>
            <textarea
              value={newIncident.description}
              onChange={(e) => setNewIncident({ ...newIncident, description: e.target.value })}
              required
            />
          </div>
          <div>
            <label>Severity:</label>
            <select
              value={newIncident.severity}
              onChange={(e) => setNewIncident({ ...newIncident, severity: e.target.value as Severity })}
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
          <button type="submit">Submit</button>
        </form>
      )}

      <div className="incidents-list">
        {filteredIncidents.map((incident) => (
          <div key={incident.id} className="incident-card">
            <div className="incident-header">
              <h3>{incident.title}</h3>
              <span className={`severity-badge ${incident.severity.toLowerCase()}`}>
                {incident.severity}
              </span>
              <span className="date">
                {new Date(incident.reported_at).toLocaleDateString()}
              </span>
              <button
                className="view-details-btn"
                onClick={() => setExpandedId(expandedId === incident.id ? null : incident.id)}
              >
                {expandedId === incident.id ? 'Hide Details' : 'View Details'}
              </button>
            </div>
            {expandedId === incident.id && (
              <div className="incident-description">
                {incident.description}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App; 