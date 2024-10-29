import axios from 'axios'
import { useEffect, useState } from 'react'

export default function File({ owner }: { owner: boolean }) {
  const [files, setFiles] = useState<File[]>([])

  useEffect(() => {
    const getFiles = async () => {
      const res = await axios.get(import.meta.env.VITE_FILES_URL)
      setFiles(res.data.Contents)
    }
    getFiles()
  }, [])
  
  const downloadFile = async (key: string) => {
      const res = await axios.get(import.meta.env.VITE_FILES_URL + '/' + key, {
      responseType: 'blob',
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

