import "dotenv/config";
import express from "express";
import cors from "cors";
import { corsDefaults } from "./utils/constants.js";
import db from "./models/db.js";
import { router as crosshairsRoute } from "./routes/index.js";

const PORT = process.env.PORT || 3001;
const app = express();
db.then(() => console.log("DB connected")).catch((err) => console.log(err));

app.use(cors(corsDefaults));
app.use(express.json());
app.get("/", (req, res) => res.json({ msg: "Initial setup." }));
app.use("/crosshairs", crosshairsRoute);

app.listen(PORT, () => console.log(`Now listening on ${PORT}`));
