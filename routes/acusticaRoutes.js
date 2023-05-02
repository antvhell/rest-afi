import express from "express";
import { acustica } from "../controllers/acusticaController.js";

import protegerRuta from "../middleware/protegerRuta.js";

const router = express.Router();

router.get("/acustica", protegerRuta, acustica);

export default router;
