import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Index from './routes/index'
import Upload from './routes/upload'
import File from './routes/file'
import RootLayout from './layouts/root-layout'

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: '/', element: <Index /> },
      { path: '/upload', element: <Upload /> },
      { path: '/my-files', element: <File owner={true} /> },
      { path: '/shared-files', element: <File owner={false} /> },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)