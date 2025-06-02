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
    expenses,
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
        author: {
          connect: {
            id: authorId,
          },
        },
        Place: placeId
          ? {
              connect: {
                id: placeId,
              },
            }
          : undefined,
        expenses: expenses
          ? {
              create: expenses,
            }
          : undefined,
        tags: Array.isArray(tags)
          ? {
              connect: tags.map((tagId: string) => ({ id: tagId })),
            }
          : undefined,
      },
    });

    return res.status(201).json(newPlace);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Failed to create place!" });
  }
};

export default Create;
