import * as Interfaces from "../../interfaces";
import { Request, Response } from "express";
import { prisma } from "../../utils";

const Delete: Interfaces.Controllers.Async = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params;

  try {
    await prisma.place.delete({
      where: { id },
    });

    res.status(200).json({ message: "Place deleted successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete place!" });
  }
};

export default Delete;
