import prisma from "prisma";
import { Request, Response } from "express";
import * as Interfaces from "../../interfaces";
const Read: Interfaces.Controllers.Async = async (
  req: Request,
  res: Response
) => {
  //write your get request logic here
  try {
    const { placeId } = req.params;

    if (!placeId) {
      return res.status(400).json({ message: "placeId is required" });
    }

    const expenses = await prisma.expense.findMany({
      where: { placeId },
    });

    res.status(200).json({ expenses });
  } catch (error) {
    res.status(500).json({ message: "Error fetching expenses", error });
  }
};
export default Read;
