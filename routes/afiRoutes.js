import express from "express";
import { noPulmonares, pulmonares } from "../controllers/afiController.js";

import protegerRuta from "../middleware/protegerRuta.js";

const router = express.Router();

router.get("/consonantes-pulmonares", protegerRuta, pulmonares);
router.get("/consonantes-no-pulmonares", protegerRuta, noPulmonares);

export default router;
