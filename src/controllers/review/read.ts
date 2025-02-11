import * as Interfaces from "../../interfaces";
import { Request, Response } from "express";
import { prisma } from "../../utils";

const Read: Interfaces.Controllers.Async = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params;

  try {
    const review = await prisma.review.findUnique({
      where: { id },
      include: { Review: true }, //include nested replies
    });
    if (!review) {
      res.status(404).json({ error: "Review not found" });
    }
    res.status(200).json(review);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch review" });
  }
};

const ReadAll: Interfaces.Controllers.Async = async (
  req: Request,
  res: Response
) => {
  const { placeId } = req.params;

  try {
    const reviews = await prisma.review.findMany({
      where: { placeId },
      include: { Review: true }, // include replies
    });
    res.status(200).json({ reviews });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch reviews" });
  }
};

export { Read, ReadAll };
