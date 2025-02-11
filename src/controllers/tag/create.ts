import * as Interfaces from "../../interfaces";
import { prisma } from "../../utils";
const Create: Interfaces.Controllers.Async = async (req, res) => {
  const { name, authorId } = req.body;

  // To validate input
  if (!name || !authorId) {
    return res.status(400).json({
      message: "Name and authorId are required",
    });
  }

  if (typeof name !== "string" || name.length < 1) {
    return res.status(400).json({
      message: "Name must be a non-empty string",
    });
  }

  if (typeof authorId !== "string" || authorId.length < 1) {
    return res.status(400).json({
      message: "authorId must be a non-empty string",
    });
  }

  try {
    // To Check if  tag already exists
    const existingTag = await prisma.tag.findFirst({
      where: { name },
    });

    if (existingTag) {
      return res.status(400).json({
        message: "Tag already exists",
      });
    }

    // To create new tag
    const newTag = await prisma.tag.create({
      data: {
        name,
        author: {
          connect: {
            id: authorId,
          },
        },
      },
    });

    // To return success response
    return res.status(201).json({
      message: "Tag created successfully",
      tag: newTag,
    });
  } catch (error) {
    console.error("Error creating tag:", error);
    return res.status(500).json({
      message: error instanceof Error ? error.message : "Internal server error",
    });
  }
};

export default Create;
