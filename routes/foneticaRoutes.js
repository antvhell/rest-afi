import express from "express";
import {
  FoneticaPulmonares,
  FoneticaNoPulmonares,
} from "../controllers/foneticaController.js";

import protegerRuta from "../middleware/protegerRuta.js";

const router = express.Router();

router.get("/consonantes-pulmonares", protegerRuta, FoneticaPulmonares);
router.get("/consonantes-no-pulmonares", protegerRuta, FoneticaNoPulmonares);

export default router;
