import * as Interfaces from "../../interfaces";
import { Request, Response } from "express";
import { prisma } from "../../utils";

const Create: Interfaces.Controllers.Async = async (
  req: Request,
  res: Response
) => {
  try {
    const {
      name,
      type,
      website,
      location,
      landmark,
      contact,
      manager,
      placeId,
    } = req.body;

    const newStay = await prisma.stay.create({
      data: {
        name,
        type,
        website,
        location,
        landmark,
        contact,
        manager,
        Place: {
          connect: {
            id: placeId,
          },
        },
      },
    });
    res.status(201).json(newStay);
  } catch (error) {
    res.status(500).json({ error: "Failed to create Stay" });
  }
};
export default Create;
