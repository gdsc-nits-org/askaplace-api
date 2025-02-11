import * as Interfaces from "../../interfaces";
import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

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
