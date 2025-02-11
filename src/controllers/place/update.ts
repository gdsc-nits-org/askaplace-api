import * as Interfaces from "../../interfaces";
import { Request, Response } from "express";
import { prisma } from "../../utils";

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
