import * as Interfaces from "../../interfaces";
import { Request, Response } from "express";
import { prisma } from "../../utils";

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
        Place: {
          connect: {
            id: placeId,
          },
        },
        Review: {
          connect: {
            id: reviewId,
          },
        }, //link to parent review if it's a reply
      },
    });
    res.status(201).json(newReview);
  } catch (error) {
    res.status(500).json({ error: "Failed to create review!" });
  }
};
export default Create;
