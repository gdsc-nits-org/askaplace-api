import * as Interfaces from "../../interfaces";
import { prisma } from "../../utils";

const Read: Interfaces.Controllers.Async = async (req, res) => {
  //write your get request logic here
  try {
    const { id } = req.params;
    const stay = await prisma.stay.findUnique({ where: { id } });
    if (!stay) {
      return res.status(404).json({ message: "Stay not found" });
      res.json(stay);
    }
  } catch (error) {
    res.json(500).json({ message: "Error fetching stay", error });
  }
};
const ReadAll: Interfaces.Controllers.Async = async (_req, res) => {
  //write your get request logic here
  try {
    const stays = await prisma.stay.findMany();
    res.json(stays);
  } catch (error) {
    res.status(500).json({ message: "Error fetching stays", error });
  }
};
export { Read, ReadAll };
