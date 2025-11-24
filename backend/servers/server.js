import { MongoClient } from "mongodb";
import express from "express";
import cors from "cors";
import multer from "multer";
import path from "path";

const app = express();
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, file.fieldname + "-" + Date.now() + ext);
  },
});
const upload = multer({ storage });
const port = 3000;

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

async function run() {
  try {
    // подключаемся к серверу MongoDB
    await client.connect();
    console.log("Подключено к MongoDB");

    // выбираем базу данных и коллекцию
    const db = client.db("myApp");
    const collection = db.collection("news");
    console.log("База данных и коллекция выбраны");

    app.get("/news", async (req, res) => {
      const news = await collection.find({}).toArray();
      res.send(news);
    });

    app.post("/news", upload.single("file"), async (req, res) => {
      try {
        const newNews = {
          title: req.body.title,
          description: req.body.description,
          author: req.body.author,
          date: req.body.date,
          filePath: req.file.path,
          originalFileName: req.file.originalname,
          mimeType: req.file.mimetype,
        };

        await collection.insertOne(newNews);

        res.send({ message: "Новость добавлена" });
      } catch (err) {
        console.error(err);
        res.status(500).send({ error: "Ошибка сервера" });
      }
    });

    app.use("/uploads", express.static("uploads"));

    // запуск сервера
    app.listen(port, () => {
      console.log(`🚀 Сервер запущен: http://localhost:${port}`);
    });
  } catch (err) {
    console.error(err);
  }
}

run();
