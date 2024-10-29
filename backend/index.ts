// express server
import express from 'express'
import cors from 'cors'
import multer from 'multer'
import { S3 } from "@aws-sdk/client-s3";
import multerS3 from "multer-s3";

const s3 = new S3({
    region: "us-east-2",
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID || "",
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || "",
    },
});

const BUCKET_NAME = "fractal-file-upload-test";

const upload = multer({
    limits: {
      fileSize: 5 * 1024 * 1024, // 5MB
    },
    storage: multerS3({
      s3: s3,
      bucket: BUCKET_NAME,
      metadata: function (req, file, cb) {
        cb(null, { fieldName: file.fieldname });
      },
      key: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`);
      },
    }),
});


const app = express()
app.use(cors())
app.use(express.json())


app.post('/api/upload', upload.single('file'), (req, res) => {
  const file = req.file
  console.log(file)
  res.send('File uploaded successfully')
})


app.listen(3000, () => {
  console.log('Server is running on port 3000')
})