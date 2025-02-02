import prisma from "prisma";
import { Request, Response } from "express";
import * as Interfaces from "../../interfaces";
const Create: Interfaces.Controllers.Async = async (
  req: Request,
  res: Response
) => {
  //write your post request logic here
  try {
    const { name, rate, total, placeId } = req.body;

    // Validate input
    if (!name || !rate || !total || !placeId) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Create expense in the database
    const newExpense = await prisma.expense.create({
      data: { name, rate, total, placeId },
    });

    return res.status(201).json({
      message: "Expense created successfully",
      expense: newExpense,
    });
  } catch (error) {
    return res.status(500).json({ message: "Error creating expense", error });
  }
};
export default Create;
