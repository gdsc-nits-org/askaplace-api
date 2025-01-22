import * as Controllers from "../controllers";
import express from "express";

const router = express.Router();
router.post("/add", Controllers.Expense.Create);
router.get("/:placeId", Controllers.Expense.Read);
router.patch("/:id", Controllers.Review.Update);
router.delete("/:id", Controllers.Review.Delete);

export default router;
