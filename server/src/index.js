import express from "express";
import cors from "cors";
import "dotenv/config";
import { corsDefaults } from "./utils/constants.js";

const PORT = process.env.PORT || 3001;
const app = express();
app.use(cors(corsDefaults));
app.use(express.json());

app.listen(PORT, () => console.log(`Now listening on ${PORT}`));
