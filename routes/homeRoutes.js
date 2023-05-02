import express from "express";
import { home } from "../controllers/homeController.js";

import protegerRuta from "../middleware/protegerRuta.js";

const router = express.Router();

router.get("/home", protegerRuta, home);

export default router;
