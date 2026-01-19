import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


// App.jxs >>> root component of thr entire project all other child components should be imported here
// main.jxs >>> main componentact as a bridge in between html(DOM) by using the id "root" in index.html
//  and other components in react