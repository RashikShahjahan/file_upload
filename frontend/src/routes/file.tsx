import { useAuth } from '@clerk/clerk-react';
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function File({ owner }: { owner: boolean }) {
  const [files, setFiles] = useState<File[]>([])
  const { getToken } = useAuth();

  useEffect(() => {
    const getFiles = async () => {
      const token = await getToken();
      const res = await axios.get(import.meta.env.VITE_FILES_URL, {
        headers: { Authorization: `Bearer ${token}` },
      })
      setFiles(res.data.Contents)
    }
    getFiles()
  }, [])
  
  const downloadFile = async (key: string) => {
    const token = await getToken();
    const res = await axios.get(import.meta.env.VITE_FILES_URL + '/' + key, {
      headers: { Authorization: `Bearer ${token}` },
    })
    const url = window.URL.createObjectURL(new Blob([res.data]))
    const a = document.createElement('a')
    a.href = url
    a.download = key
    a.click()
  }
  return(
    <div>
      {files.map((file) => (
          <div key={file.Key}>
          {file.Key}
          {file.LastModified}
          {file.Size}
          <button onClick={() => downloadFile(file.Key)}>Download</button>
        </div>
       ))}
    </div>
  )
    
}

