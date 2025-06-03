import * as Interfaces from "../../interfaces";
import { prisma } from "../../utils";

const Create: Interfaces.Controllers.Async = async (req, res) => {
  try {
    const { name, role, email, firebaseId, picture } = req.body;

    const newUser = await prisma.user.create({
      data: {
        name,
        role,
        email,
        firebaseId,
        picture,
      },
    });

    res.status(201).json({ message: "User created successfully", newUser });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Error in creating User" });
  }
};

export default Create;
