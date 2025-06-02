import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, HashRouter, RouterProvider } from 'react-router-dom'
import Destination from './pages/Destination.jsx'
import Crew from './pages/Crew.jsx'
import Technology from './pages/Technology.jsx'

const router = createBrowserRouter([
  { path: '/', element: <App/> },
  { path: '/destination', element: <Destination/>},
  { path: '/crew', element: <Crew/> },
  { path: '/technology', element: <Technology/> },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter>
    <RouterProvider router={router}/>
  </HashRouter>,
)
