import { Outlet, Link } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div className="App">
      <h1>React Router Example</h1>
      <Link to="/">Home</Link> <Link to="/examples">Examples</Link>
      <Outlet />
    </div>
  )
}

export default App
