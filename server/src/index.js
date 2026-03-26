import express from "express";
import cors from "cors";
import { PORT } from "./config/env.js";
import { requireAuth } from "@clerk/express";
import jobRoutes from "./routes/jobRoutes.js";
import { sql } from "./db/index.js";
import path from "path";


const app = express();

// // Serve static files
app.use(express.static(path.join(process.cwd(), "dist")));

app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({
    status: "OK",
    message: "Job Board API is running",
  });
});

app.use("/api/jobs", jobRoutes); // job routes

const initDb = async () => {
  try {
    await sql`
        CREATE TABLE IF NOT EXISTS jobs (
          id SERIAL PRIMARY KEY,
          title VARCHAR(255) NOT NULL,
          type VARCHAR(50) NOT NULL,
          description TEXT,
          location VARCHAR(255),
          salary VARCHAR(100),

          company_name VARCHAR(255),
          company_description TEXT,
          contact_email VARCHAR(255),
          contact_phone VARCHAR(50),

          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )`;

    console.log('Database Initialised');
  } catch (error) {
    console.log('Error initialising database:', error.message);
  }
};

if (process.env.NODE_ENV === 'production') {
  const __dirname = path.resolve();
  // Serve static files
  app.use(express.static(path.join(__dirname, "../client/dist")));
}

// Catch-all (React router support)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

initDb().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})