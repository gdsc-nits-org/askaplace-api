import * as Interfaces from "../../interfaces";
import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

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
        author: {
          connect: {
            id: authorId,
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
