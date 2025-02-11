import * as Interfaces from "../../interfaces";
import { prisma } from "../../utils";

const Update: Interfaces.Controllers.Async = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      name,
      type,
      website,
      location,
      landmark,
      contact,
      manager,
      placeId,
    } = req.body;
    const existingStay = await prisma.stay.findUnique({ where: { id } });
    if (!existingStay) {
      return res.status(404).json({ message: "Stay not found" });
    }
    const updatedStay = await prisma.stay.update({
      where: { id },
      data: {
        name,
        type,
        website,
        location,
        landmark,
        contact,
        manager,
        Place: {
          connect: {
            id: placeId,
          },
        },
      },
    });
    res.status(200).json(updatedStay);
  } catch (error) {
    res.status(500).json({ message: "Error updating stay", error });
  }
};
export default Update;
