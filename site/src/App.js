import logo from './logo.svg'
import { Outlet, Link } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Link to="/">Home</Link> <Link to="/examples">Examples</Link>
      <Outlet />
    </div>
  )
}

export default App
