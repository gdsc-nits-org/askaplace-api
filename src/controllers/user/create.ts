import * as Interfaces from "../../interfaces";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const Create: Interfaces.Controllers.Async = async (req, res) => {
  try {
    const { name, role, email, firebaseId } = req.body;

    // Create the user in the database
    const newUser = await prisma.user.create({
      data: {
        name,
        role,
        email,
        firebaseId,
      },
    });

    res.status(201).json({ message: "User created successfully", newUser });
  } catch (error) {
    res.status(500).json({ message: "Error in creating User" });
  }
};
export default Create;
