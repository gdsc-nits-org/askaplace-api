import * as Controllers from "../controllers";
import express from "express";

const router = express.Router();
router.post("/add", Controllers.Place.Create);
router.get("/:id", Controllers.Place.Read);
router.get("/", Controllers.Place.ReadAll);
router.patch("/:id", Controllers.Place.Update);
router.delete("/:id", Controllers.Place.Delete);

export default router;
