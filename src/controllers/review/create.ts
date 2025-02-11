import * as Interfaces from "../../interfaces";
import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

const Create: Interfaces.Controllers.Async = async (
  req: Request,
  res: Response
) => {
  const { reviewer, review, rating, placeId, reviewId } = req.body;

  try {
    const newReview = await prisma.review.create({
      data: {
        reviewer,
        review,
        rating,
        placeId,
        reviewId, //link to parent review if it's a reply
      },
    });
    res.status(201).json(newReview);
  } catch (error) {
    res.status(500).json({ error: "Failed to create review!" });
  }
};
export default Create;
