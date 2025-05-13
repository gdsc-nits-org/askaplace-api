import prisma from "prisma";
import { Request, Response } from "express";
import * as Interfaces from "../../interfaces";
const Update: Interfaces.Controllers.Async = async (
  req: Request,
  res: Response
) => {
  //write your patch request logic here
  try {
    const { id } = req.params;
    const updatedData = req.body;

    if (!id) {
      return res.status(400).json({ message: "Expense ID is required" });
    }

    const updatedExpense = await prisma.expense.update({
      where: { id },
      data: updatedData,
    });

    if (!updatedExpense) {
      return res.status(404).json({ message: "Expense not found" });
    }

    return res.status(200).json({
      message: "Expense updated successfully",
      expense: updatedExpense,
    });
  } catch (error) {
    return res.status(500).json({ message: "Error updating expense", error });
  }
};
export default Update;
