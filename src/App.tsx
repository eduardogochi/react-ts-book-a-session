import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import HomePage from './pages/Home'
import SessionsPage from './pages/Sessions'
import Root from './pages/Root'

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {path:'/sessions', element: <SessionsPage />},
    ],
  }
])

function App() {
  return (
    <RouterProvider router={Router} />
  )
}
export default App
