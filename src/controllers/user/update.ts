import * as Interfaces from "../../interfaces";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const Update: Interfaces.Controllers.Async = async (req, res) => {
 

  try {
    const { id } = req.params;
    const { name, role, email, firebaseId, posts, tags } = req.body;

    // Update the user in the database
    const updateData: any = {};
    if (name) updateData.name = name;
    if (role) updateData.role = role;
    if (email) updateData.email = email;
    if (firebaseId) updateData.firebaseId = firebaseId;
    if (posts) updateData.posts = { set: posts.map((post: string) => ({ id: post })) };
    if (tags) updateData.tags = { set: tags.map((tag: string) => ({ id: tag })) };
    
    const user = await prisma.user.update({
      where: { id },
      data: updateData,
      include: { posts: true, tags: true },
  });

  res.status(200).json(user);
 } catch (error) {
  console.error("Error updating user:", error);
  res.status(500).json({ error: "Error updating user"});
 }
};
export default Update;
