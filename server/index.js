import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();
const API_KEY = process.env.CRUX_API_KEY;

const app = express();

const PORT = 3000;

app.use(cors());

app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send(`Server is running 🚀`);
});

app.post("/api/performance", async (req, res) => {
    const { urls } = req.body;

    if (!urls) {
        return res.status(400).json({ error: "URLs are required." });
    }

    const urlArray = urls.split(",").map((url) => url.trim());
    const results = [];

    for (const url of urlArray) {
        try {
            const response = await axios.post(
                `https://chromeuxreport.googleapis.com/v1/records:queryRecord?key=${API_KEY}`,
                {
                    origin: url,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            results.push({
                url,
                data: response.data,
            });
        } catch (error) {
            results.push({
                url,
                error: error.message,
            });
        }
    }

    res.json({ results });
});

app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
});
