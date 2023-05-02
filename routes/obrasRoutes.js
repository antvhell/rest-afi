import express from "express";
import { obras } from "../controllers/obrasController.js";

import protegerRuta from "../middleware/protegerRuta.js";

const router = express.Router();

router.get("/obras", protegerRuta, obras);

export default router;
