import prisma from "prisma";
import { Request, Response } from "express";
import * as Interfaces from "../../interfaces";
const Delete: Interfaces.Controllers.Async = async (
  req: Request,
  res: Response
) => {
  //write your delete request logic here
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: "Expense ID is required" });
    }

    const deletedExpense = await prisma.expense.delete({
      where: { id },
    });

    if (!deletedExpense) {
      return res.status(404).json({ message: "Expense not found" });
    }

    return res.status(200).json({ message: "Expense deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Error deleting expense", error });
  }
};
export default Delete;
