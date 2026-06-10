import dotenv from "dotenv";
import { fileURLToPath } from "url";
import path from "path";
import app from "./app.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, ".env") });

console.log("ENV CHECK:", process.env.PORT, process.env.MONGODB_URI);

import { dbConnection } from "./database/dbConnection.js";

dbConnection();

const PORT = Number(process.env.PORT) || 4000;
const server = app.listen(PORT, () => {
  console.log(`SERVER HAS STARTED AT PORT ${PORT}`);
});

server.on("error", (error) => {
  if (error.code === "EADDRINUSE") {
    console.error(
      `Port ${PORT} is already in use. Please stop the process using that port or set another PORT in .env.`,
    );
  } else {
    console.error("Server error:", error);
  }
  process.exit(1);
});
