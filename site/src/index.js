import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Examples from './Examples'
import Example from './Example'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<div>TODO - put home page here</div>} />
          <Route path="examples" element={<Examples />}>
            <Route index element={<div>Select an example</div>} />
            <Route path=":exampleId" element={<Example />} />
          </Route>
          <Route path="*" element={<div>404 goes here</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
