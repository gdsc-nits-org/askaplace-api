import * as Interfaces from "../../interfaces";
import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

const Update: Interfaces.Controllers.Async = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params;
  const { review, rating } = req.body;

  try {
    const updatedReview = await prisma.review.update({
      where: { id },
      data: { review, rating },
    });
    res.status(200).json(updatedReview);
  } catch (error) {
    res.status(500).json({ error: "Failed to update review" });
  }
};
export default Update;
