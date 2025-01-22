import * as Controllers from "../controllers";
import express from "express";

const router = express.Router();
router.post("/add", Controllers.Stay.Create);
router.get("/:id", Controllers.Stay.Read);
router.get("/:placeId", Controllers.Stay.ReadAll);
router.patch("/:id", Controllers.Stay.Update);
router.delete("/:id", Controllers.Stay.Delete);

export default router;
