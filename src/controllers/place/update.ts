import * as Interfaces from "../../interfaces";
import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

const Update: Interfaces.Controllers.Async = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params;
  const updatedData = req.body;

  try {
    const updatedPlace = await prisma.place.update({
      where: { id },
      data: updatedData,
    });

    res.status(200).json(updatedPlace);
  } catch (error) {
    res.status(500).json({ error: "Failed to update place!" });
  }
};

export default Update;
