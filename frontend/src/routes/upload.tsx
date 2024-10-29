import axios from 'axios'

export default function Upload() {
  const handleUpload = () => {
    const input = document.getElementById("input") as HTMLInputElement;
    if (!input) return;
    const file = input.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    axios.post(import.meta.env.VITE_UPLOAD_URL, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
  }

  return (
    <div>
      <input type="file" id="input" />
      <button onClick={handleUpload}>Upload</button>
    </div>
  )
}
