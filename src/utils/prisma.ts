import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
async function testConnection() {
  try {
    // Try a simple query to check DB connection
    await prisma.$connect();
    console.log("✅ MongoDB connected successfully via Prisma.");
  } catch (error) {
    console.error("❌ Error connecting to MongoDB via Prisma:", error);
  }
}

testConnection();

export default prisma;
