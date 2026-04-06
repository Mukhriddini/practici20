import './App.css'

function App() {
  const projects = [
    {
      id: 1,
      title: "Mobile App Development",
      status: "In Progress",
      desc: "Creating a cross-platform mobile application for inventory management.",
      tasks: 12,
      avatars: 3
    },
    {
      id: 2,
      title: "Website Redesign",
      status: "Done",
      desc: "Updating the corporate website with a modern look and better UX.",
      tasks: 8,
      avatars: 2
    },
    {
      id: 3,
      title: "Marketing Campaign",
      status: "In Progress",
      desc: "Launching a new social media marketing campaign for the Q2 product release.",
      tasks: 15,
      avatars: 4
    }
  ]

  return (
    <div className="app-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-logo">Projects</div>
        <nav className="sidebar-nav">
          <div className="nav-item">Dashboard</div>
          <div className="nav-item active">Projects</div>
          <div className="nav-item">Teams</div>
          <div className="nav-item">Settings</div>
        </nav>
      </aside>

      {/* Main Area */}
      <main className="main-area">
        <header className="header">
          <div className="header-title">Projects</div>
          <div className="header-actions">
            <input type="text" placeholder="Search..." className="search-input" />
            <button className="btn-primary">+ New</button>
          </div>
        </header>

        <section className="content">
          <div className="projects-grid">
            {projects.map(project => (
              <div key={project.id} className="project-card">
                <div className="card-header">
                  <h3 className="card-title">{project.title}</h3>
                  <span className={`status-badge ${project.status === 'Done' ? 'status-done' : 'status-progress'}`}>
                    {project.status}
                  </span>
                </div>
                <p className="card-desc">{project.desc}</p>
                <div className="card-footer">
                  <span className="tasks-count">{project.tasks} tasks</span>
                  <div className="avatars">
                    {[...Array(project.avatars)].map((_, i) => (
                      <div key={i} className="avatar"></div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
