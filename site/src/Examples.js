import { Outlet, NavLink } from 'react-router-dom'

function Examples() {
  return (
    <div>
      <h2>Examples</h2>
      <div>
        <NavLink
          style={({ isActive }) => {
            return { color: isActive ? 'red' : '' }
          }}
          to="/examples/1"
        >
          Example 1
        </NavLink>
      </div>
      <div>
        <NavLink
          style={({ isActive }) => {
            return { color: isActive ? 'red' : '' }
          }}
          to="/examples/2"
        >
          Example 2
        </NavLink>
      </div>
      <Outlet />
    </div>
  )
}

export default Examples
