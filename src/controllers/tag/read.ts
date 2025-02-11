import * as Interfaces from "../../interfaces";
import { prisma } from "../../utils";
const Read: Interfaces.Controllers.Async = async (req, res) => {
  try {
    // To fetch all tags from the database
    const tags = await prisma.tag.findMany({
      include: {
        author: true,
        Place: true,
      },
    });

    // To return the tags in the response
    return res.status(200).json({
      message: "Tags fetched successfully",
      tags,
    });
  } catch (error) {
    console.error("Error fetching tags:", error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

export default Read;
