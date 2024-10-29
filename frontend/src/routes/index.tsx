import { Link } from 'react-router-dom'

export default function Index() {
  return (
    <div>
      <h1>File Manager</h1>
      <div>
        <ul>
          <li>
            <Link to="/upload">Upload</Link>
          </li>
          <li>
            <Link to="/folder/">Folder</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}