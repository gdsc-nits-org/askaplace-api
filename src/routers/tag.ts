import * as Controllers from "../controllers";
import express from "express";

const router = express.Router();
router.post("/add", Controllers.Tag.Create);
router.get("/", Controllers.Tag.Read);

export default router;
