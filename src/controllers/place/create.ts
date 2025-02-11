import * as Interfaces from "../../interfaces";
import { Request, Response } from "express";
import { prisma } from "../../utils";
const Create: Interfaces.Controllers.Async = async (
  req: Request,
  res: Response
) => {
  const {
    photos,
    place,
    description,
    location,
    longitiude,
    latitude,
    mode_of_travel,
    blog,
    upvotes,
    downvotes,
    expense,
    placeId,
    authorId,
    tags,
  } = req.body;

  try {
    const newPlace = await prisma.place.create({
      data: {
        photos,
        place,
        description,
        location,
        longitiude,
        latitude,
        mode_of_travel,
        blog,
        upvotes,
        downvotes,
        expense,
        tags,
        author: {
          connect: {
            id: authorId,
          },
        },
        Place: {
          connect: {
            id: placeId,
          },
        },
      },
    });
    res.status(201).json(newPlace);
  } catch (error) {
    res.status(500).json({ error: "Failed to create place!" });
  }
};

export default Create;
