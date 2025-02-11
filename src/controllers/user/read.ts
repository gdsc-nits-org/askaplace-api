import * as Interfaces from "../../interfaces";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const Read: Interfaces.Controllers.Async = async (req, res) => {
  //write your get request logic here
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
};
const Self: Interfaces.Controllers.Async = async (req, res) => {
  try {
    const firebaseId = req.body.firebaseId;

    if (!firebaseId) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    const user = await prisma.user.findMany({
      where: { firebaseId: firebaseId },
    });

    if (!user) {
      return res.json(404).json({ error: "User not found" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong!" });
  }
};

export { Read, Self };
