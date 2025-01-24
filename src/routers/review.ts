import * as Controllers from "../controllers";
import express from "express";

const router = express.Router();
router.post("/add", Controllers.Review.Create);
router.get("/:id", Controllers.Review.Read);
router.get("/:placeId", Controllers.Review.ReadAll);
router.patch("/:id", Controllers.Review.Update);
router.delete("/:id", Controllers.Review.Delete);

export default router;
