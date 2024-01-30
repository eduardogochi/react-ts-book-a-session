import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import HomePage from './pages/Home'
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
    ],
  }
])

function App() {
  return (
    <RouterProvider router={Router} />
  )
}
export default App
