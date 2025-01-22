import * as Controllers from "../controllers";
import express from "express";

const router = express.Router();
router.post("/add", Controllers.User.Create);
router.get("/:id", Controllers.User.Read);
router.get("/me", Controllers.User.Self);
router.patch("/:id", Controllers.User.Update);

export default router;
