import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import RootLayout from './layouts/root-layout'
import Index from './routes'
import Upload from './routes'
import File from './routes'

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: '/', element: <Index /> },
      { path: '/upload', element: <Upload /> },
      {
        path: 'folder',
        children: [
          { path: '/folder/my-files', element: <File owner={true} /> },
          { path: '/folder/shared-files', element: <File owner={false} /> },
        ],
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)