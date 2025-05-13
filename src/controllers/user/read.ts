import * as Interfaces from "../../interfaces";
import { prisma } from "../../utils";
const Read: Interfaces.Controllers.Async = async (_req, res) => {
  //write your get request logic here
  try {
    const users = await prisma.user.findMany();
    return res.json(users);
  } catch (error) {
    return res.status(500).json({ error: "Something went wrong" });
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
      include: {
        posts: true,
        tags: true,
      },
    });

    if (!user) {
      return res.json(404).json({ error: "User not found" });
    }
    return res.json(user);
  } catch (error) {
    return res.status(500).json({ error: "Something went wrong!" });
  }
};

export { Read, Self };
