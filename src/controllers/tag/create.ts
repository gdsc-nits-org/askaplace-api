import * as Interfaces from "../../interfaces";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const Create: Interfaces.Controllers.Async = async (req, res) => {
  const { name, authorId } = req.body;

  if (!name || !authorId) {
    return res.status(400).json({
      message: "Name and authorId are required",
    });
  }

  try {
    const existingTag = await prisma.tag.findFirst({ where: { name } });
    if (existingTag) {
      return res.status(400).json({
        message: "Tag already exists",
      });
    }

    const newTag = await prisma.tag.create({
      data: { name, authorId },
    });

    return res.status(200).json({
      message: "Tag created successfully",
      tag: newTag,
    });
  } catch (error) {
    console.error("Error creating tag:", error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

export default Create;
