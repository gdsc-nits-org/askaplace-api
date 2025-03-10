import * as Interfaces from "../../interfaces";
import { Request, Response } from "express";
import { prisma } from "../../utils";

const Read: Interfaces.Controllers.Async = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params;

  try {
    const place = await prisma.place.findUnique({
      where: { id },
    });

    if (!place) {
      return res.status(404).json({ error: "Place not found!" });
    }

    return res.status(200).json(place);
  } catch (error) {
    return res.status(500).json({ error: "Failed to fetch place details!" });
  }
};

const ReadAll: Interfaces.Controllers.Async = async (
  _req: Request,
  res: Response
) => {
  try {
    const places = await prisma.place.findMany({
      include: {
        stay: true,
        tourist_locations: true,
        author: true,
        tags: true,
        reviews: true,
        expenses: true,
        place:true,
      },
    });

    return res.status(200).json(places);
  } catch (error) {
    return res.status(500).json({ error: "Failed to fetch places!" });
  }
};

export { Read, ReadAll };
