import * as Interfaces from "../../interfaces";
import { prisma } from "../../utils";

const Read: Interfaces.Controllers.Async = async (req, res) => {
  try {
    const { id } = req.params;
    const stay = await prisma.stay.findUnique({ where: { id } });

    if (!stay) {
      return res.status(404).json({ message: "Stay not found" });
    }

    return res.status(200).json(stay);
  } catch (error) {
    return res.status(500).json({ message: "Error fetching stay", error });
  }
};

const ReadAll: Interfaces.Controllers.Async = async (_req, res) => {
  try {
    const stays = await prisma.stay.findMany();
    return res.status(200).json(stays);
  } catch (error) {
    return res.status(500).json({ message: "Error fetching stays", error });
  }
};

export { Read, ReadAll };
